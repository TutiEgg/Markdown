# Anleitung zur Navigation

  

## Einleitung
Die Navigation kann automatisch oder manuell erzeugt werden. 
Außerdem gibt es eine Auswahl zwischen verschiedenen Layouts.  

1. [Navigation automatisch oder manuell erzeugen](#Navigation-automatisch-oder-manuell-erzeugen)
2. [Layout der Navigation anpassen](#Layout-der-Navigation-anpassen)
3. [Übersicht Layouts](#Übersicht-Layouts)

  

## Navigation automatisch oder manuell erzeugen  

Ob die Navigation automatisch oder manuell erzeugt wird, wird in der Datei settings.json in dem Wert "autonavi" festgelegt.

Zur Änderung der Einstellung öffnen Sie die Datei settings.json im Code-Editor unter pages/post/settings.json, weisen den gewünschten Wert zu und speichern anschließend.  

Mit dem Wert *true* wird die automatische Generierung der Navigation eingeschaltet. Mit dem Wert *false* wird die automatische Genrerierung der Navigation ausgeschaltet.

  

## Layout der Navigation anpassen  

Für die Darstellung der Navigation kann zwischen drei verschiedenen responsive Layouts ausgewählt werden.  
Es gibt ein responsive Layout mit Top Navigation und zwei responsive Layouts mit Sidebar.  

Zur Änderung des Layouts der Navigation öffnen Sie die Datei _app.js im Code-Editor unter pages/_app.js.
In dieser Datei werden alle Layouts importiert:
  
*// import '../styles/globals.css';*  
*// import '../styles/globals_sidebar.css';*  
*import '../styles/globals_sidebar_2.css';*  

Mit der Zeile *// import '../styles/globals.css';* &nbsp;wird das **Layout mit Top Navigation** importiert.  
Mit der Zeile *// import '../styles/globals_sidebar.css';* &nbsp;wird das **Layout mit Sidebar Version 1** importiert.  
Mit der Zeile *import '../styles/globals_sidebar_2.css';* &nbsp;wird das **Layout mit Sidebar Version 2** importiert.

Die nicht-aktiven Layouts werden mit // auskommentiert bzw. ausgeschaltet.  
In unserem Beispiel ist also das **Layout mit Sidebar Version 2** aktiv.

  

## Übersicht Layouts

**Layout mit Top Navigation**: Bei diesem Layout befindet sich die Navigation oben auf der Website. Untermenü-Punkte werden bei Mouseover eingeblendet. Top-Navigation Layouts eignet sich am besten für Websites mit wenigen Menüpunkten.

**Layout mit Sidebar Version 1**: Bei diesem Layout befindet sich die Navigation links an der Seite der Webiste. Untermenü-Punkte werden eingerückt. Sidebar Layouts eignen sich am besten für Websites mit vielen Menüpunkten. Die Elemente sind abgerundet.

**Layout mit Sidebar Version 2**: Bei diesem Layout befindet sich die Navigation links an der Seite der Webiste. Untermenü-Punkte werden eingerückt. Sidebar Layouts eignen sich am besten für Websites mit vielen Menüpunkten. Die Elemente sind eckig und die Abstände sind schmal.