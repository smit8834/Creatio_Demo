namespace Terrasoft.AppFeatures
{
	using System;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;

	#region Class: AppFeatureStateQueryExecutor

	[DefaultBinding(typeof(IEntitySchemaQueryExecutor), Name = "AppFeatureStateQueryExecutor")]
	internal class AppFeatureStateQueryExecutor : BaseQueryExecutor, IEntitySchemaQueryExecutor
	{

		#region Constructors: Public

		public AppFeatureStateQueryExecutor(UserConnection userConnection)
			: base(userConnection, "AppFeatureState") {
		}

		#endregion

		#region Methods: Public

		public EntityCollection GetEntityCollection(EntitySchemaQueryFilterCollection filters) {
			var collection = new EntityCollection(UserConnection, EntitySchema);
			var esq = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "AdminUnitFeatureState");
			esq.AddAllSchemaColumns();
			QueryFilterInfo filterInfo = filters.ParseFilters();
			if (GetIsPrimaryColumnValueFilter(filterInfo, out Guid featureStateId)) {
				IEntitySchemaQueryFilterItem filter = esq.CreateFilterWithParameters(FilterComparisonType.Equal, "Id",
					featureStateId);
				esq.Filters.Add(filter);
			} else if (filterInfo.GetIsSingleColumnValueEqualsFilter("[AppFeature:Id:Feature].Id",
					out Guid featureId)) {
				IEntitySchemaQueryFilterItem featureIdFilter = esq.CreateFilterWithParameters(
					FilterComparisonType.Equal, "Feature", featureId);
				esq.Filters.Add(featureIdFilter);
			} else {
				return collection;
			}
			EntityCollection dataInDb = esq.GetEntityCollection(UserConnection);
			foreach (Entity row in dataInDb) {
				Entity entity = EntitySchema.CreateEntity(UserConnection);
				entity.SetDefColumnValues();
				entity.PrimaryColumnValue = row.PrimaryColumnValue;
				entity.SetColumnValue("FeatureId", row.GetTypedColumnValue<Guid>("FeatureId"));
				entity.SetColumnValue("FeatureCode", row.GetTypedColumnValue<string>("FeatureName"));
				entity.SetColumnValue("AdminUnitId", row.GetTypedColumnValue<Guid>("SysAdminUnitId"));
				entity.SetColumnValue("AdminUnitName", row.GetTypedColumnValue<string>("SysAdminUnitName"));
				entity.SetColumnValue("FeatureState", row.GetTypedColumnValue<int>("FeatureState") == 1);
				entity.StoringState = StoringObjectState.NotChanged;
				collection.Add(entity);
			}
			return collection;
		}

		#endregion

	}

	#endregion

}

