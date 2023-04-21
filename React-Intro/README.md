# React:
Javascript Script Library to build User Interfaces
# Why React:
React is composable (Componenet Based) (Code Reusability)
	Components are like functions in Js
React helps in creating Single Page Applications
	No reload
	Faster
	High performance
	1 Html page
React is Declarative


# MPA VS SPA (Multi Page Vs Single Page)

Multi-page:
for each request server sends new page reload
slower
ex- Amazon
SEO Friendly (only MPAs become Better in SEO rank)

Single Page:
for each request server sends AJAX requests (ex.whatsapp, netflix)
Useful
Faster


React.createElement()
* similiar like documnet.createElement()

React.createElement has 3 arguments:
	type(kind of element.. h1,div, p),{ } or null (attributes like id, className)," sample text"

ReactDOM.createRoot(document.getElementById("root")).render(variable_to_render)

ReactDOM --- Virtual DOM