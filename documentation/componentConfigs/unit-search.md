## Available properties in config object:
criteria: 
    [domain]	string	Search cabins associated with a particular domain name
    [bedrooms]	integer	Number of bedrooms
    [minbedrooms]	boolean	Modifies “bedrooms” to be a minimum number
    [bathrooms]	integer	Minimum number of bathrooms
    [sleeps]	integer	Minimum occupancy
    [arrive]	date	Arrival date for availability search
    [depart]	date	Departure date for availability search
    [name]	string	Search by unit name
    [id]	string	Comma-separated list of unit ID numbers to get specific units
    [radiuslat]	float	Latitude for distance search
    [radiuslng]	float	Longitude for distance search
    [radius]	float	Distance from geo coordinates (in miles)
    [amenities[]]	array	Amenities to search for. Key is amenity ID, value is amenity value. For list type amenities, use “*” to match any value.
    [sort]	string	By default this returns results sorted by unit name. Set this parameter to sort differently server-side. Valid values: bedrooms
    [getAmenities]	string	Comma-separated list of amenities to include in the results. Often used for displaying icons for key amenities on listing pages. “*” will return all amenities for all units in the search results.
    [minprice]	decimal	Filters out units with a maximum rate below this value
    [maxprice]	decimal	Filters out units with a minimum rate above this value
