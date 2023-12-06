# AI-course-search-API

This API was built using Node and Express.js. It interacts with the OpenAI and Pinecone APIs, handling requests at the endpoint `/api/queries` and returning a set of courses that best match the query.

Example call:
```
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"query": "french art", "k": 2}' \
  https://ai-course-search-api.onrender.com/api/queries
```
Example Response:
```
{
	"matches": [
		{
			"id": "503",
			"score": 0.845635593,
			"values": [],
			"metadata": {
				"Course Number": 29,
				"Department": "FREN",
				"Description": "Studies in such aspects of the cultural heritage as French art, music, and history. Credit for this course is awarded students who have successfully completed the program of the Dartmouth Foreign Study Program at one of its university centers in France.",
				"Dist": [
					"ART"
				],
				"Instructor": "Robert St. Clair",
				"Period Code": "FS",
				"Title": "French Civilization:FSP",
				"WC": "W"
			}
		},
		{
			"id": "53",
			"score": 0.834232569,
			"values": [],
			"metadata": {
				"Course Number": 28.05,
				"Department": "ARTH",
				"Description": "This course explores the transformative period in European art and culture between 1700 and 1800, when the playful decadence of the Rococo gave way to the morally purified art of Neoclassicism. We will study the “high arts” of painting, sculpture & architecture in the context of an expanded realm of visual culture, including interior design and decorative objects, clothing and fashion, hairstyles and luxury goods, the art market and the print trade.  We will investigate the political and social uses of art at the time paying special attention to alternative discourses of power spoken through fashion, gesture and influence. We will examine court culture, the new public sphere, the growth of the middle class, the Grand Tour, the expanded role of women in the 18th century as patrons and artists, and the socio-political changes leading up to the French Revolution. Artists include Hogarth, Watteau, Boucher, Kauffman, Reynolds, Adam, Greuze, among others.",
				"Dist": [
					"ART"
				],
				"Instructor": "Kristin O'Rourke",
				"Period Code": "12",
				"Title": "Art & Society in the Rococo",
				"WC": "W"
			}
		}
	],
	"namespace": ""
}

```

## URLs
API: https://ai-course-search-api.onrender.com

Web App: https://dartsearch.onrender.com