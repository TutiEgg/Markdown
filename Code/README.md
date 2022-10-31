Die Anwendung kommt ohne node_modules. Diese müssen ergänzt werden.
Man kann diese bekommen indem man einen temporären Ordner erstellt indem man eine Next-Applikation erstellt und den Nodes_modules-Ordner kopiert. npx create-next-app "name"

Sowie die Installation von MDX
npm install @next/mdx @mdx-js/loader

Falls der Fehler kommt: TypeError: filesystem.readdirSync is not a function
Installieren sie diese durch den Befehl: "npm i fs"

Der Prototype 1 
    ist der Prototype der sehr gut läuft und die Hauptfunktionen beinhaltet.
    Navigation durch Slug. Es können, egal in welcher hierarchisch Ordnerstruktur oder Datei-Formate, 
    Seiten gebildet und auf diese Navigiert werden.
    Durch gray-matter können Variablen innerhalb der Datei benutzt werden. 
    Es gibt eine overview seite => http://localhost:3000/overview

Der Prototype 2 
    ist der selbe wie der Prototype 1, nur wird hier nun die Navigation automatisch erstellt in Abhängigkeit der Ordnerstruktur.

Der Prototype 3 ist noch stark in der Bearbeitung und funktioniert nicht so wie er es momentan soll. Die meisten Veränderungen haben wir noch Lokal abgespeichert. Da wir all an seperaten funktionen arbeiten und bei einem push von zB dem prototypen 1 nicht automatisch den Prototypenv3 zwinged mergen müssen (weil wir an den selben Dateien im Prototypen 3 arbeiten.). Deshalb sind nicht alle FUnktionen auf dem Github-Repo zusehen

