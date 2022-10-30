namespace Terrasoft.Configuration.EWS
{
	using System;

	#region Class: StringExtentions

	internal static class StringExtentions 
	{

		#region Methods: Internal

		internal static string MaskedEmail(this string source) {
			var parts = source.Split('@');
			if (parts.Length != 2) {
				return source;
			}
			var name = parts[0];
			return $"{name.Substring(0, Math.Min(2, name.Length))}******@{parts[1]}";
		}

		internal static string Masked(this string source) {
			return $"{source.Substring(0, Math.Min(6, source.Length))}******";
		}

		#endregion

	}

	#endregion

}
