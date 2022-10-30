namespace Terrasoft.AppFeatures
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Linq.Expressions;
	using Terrasoft.Common;
	using Terrasoft.Core.Entities;

	#region Class: ObjectQuery

	internal class ObjectQuery<TObject>
	{

		#region Fields: Private

		private readonly IReadOnlyDictionary<string, string> _columnToPropertyMap;
		private readonly Expression<Func<TObject, object>> _defaultOrdering;

		#endregion

		#region Constructors: Public

		public ObjectQuery(IReadOnlyDictionary<string, string> columnToPropertyMap,
				Expression<Func<TObject, object>> defaultOrdering) {
			_columnToPropertyMap = columnToPropertyMap;
			_defaultOrdering = defaultOrdering;
		}

		#endregion

		#region Methods: Private

		private List<(string, OrderDirection)> GetSortingInfo(EntitySchemaQuery query) {
			return query.Columns
				.Where(c => c.OrderDirection != OrderDirection.None)
				.OrderBy(c => c.OrderPosition)
				.Select(c => (c.Path, c.OrderDirection)).ToList();
		}

		private IQueryable<TObject> GetOrderedDescriptors(EntitySchemaQuery esq, IQueryable<TObject> items) {
			IOrderedQueryable<TObject> ordered = null;
			var sortingInfo = GetSortingInfo(esq);
			foreach ((string, OrderDirection) info in sortingInfo) {
				if (!_columnToPropertyMap.TryGetValue(info.Item1, out var propertyName)) {
					continue;
				}
				if (ordered == null) {
					ordered = info.Item2 == OrderDirection.Ascending
						? items.OrderBy(propertyName)
						: items.OrderByDescending(propertyName);
				} else {
					ordered = info.Item2 == OrderDirection.Ascending
						? ordered.ThenBy(propertyName)
						: ordered.ThenByDescending(propertyName);
				}
			}
			return ordered ?? items.OrderBy(_defaultOrdering);
		}

		private IEnumerable<TObject> GetFilteredItems(IEnumerable<TObject> source,
				QueryFilterInfo filterInfo) {
			if (!(filterInfo is FilterCollection group) || group.LogicalOperation != LogicalOperationStrict.And) {
				return ApplyFiltering(filterInfo);
			}
			foreach (var item in group.Filters) {
				source = ApplyFiltering(item);
			}
			return source;
			IEnumerable<TObject> ApplyFiltering(QueryFilterInfo filterInfoItem) {
				if (!(filterInfoItem is CompareColumnWithValueFilter simpleFilter)) {
					return source;
				}
				return _columnToPropertyMap.TryGetValue(simpleFilter.ColumnPath, out var propertyName)
					? source.FilterBy(propertyName, simpleFilter)
					: source;
			}
		}

		#endregion

		#region Methods: Public

		public IEnumerable<TObject> GetItems(IEnumerable<TObject> allItems, EntitySchemaQuery esq,
				QueryFilterInfo filterInfo) {
			IEnumerable<TObject> filteredItems = GetFilteredItems(allItems, filterInfo);
			IQueryable<TObject> orderedItems = GetOrderedDescriptors(esq, filteredItems.AsQueryable());
			IEnumerable<TObject> descriptors = orderedItems.Skip(esq.SkipRowCount);
			return esq.RowCount == -1 ? descriptors : descriptors.Take(esq.RowCount);
		}

		#endregion

	}

	#endregion

}
