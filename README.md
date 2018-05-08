# Webtestat (HSR Web Engineering + Design)

## Aufgabenstellung - Testat für Web 1 2018

### Ziele des Testates
In der Vorlesung behandelte Aspekte vertiefen und anwenden.

### Aufgabenbeschreibung
Ihre Aufgabe ist es, einen Wikipraktika-Artikel über das Thema Taschenrechner zu erstellen. Dafür müssen Sie ein gültiges HTML-Dokument und ein der Visualisierungsvorlage entsprechendes Styling mit CSS erstellen. Zusätzlich müssen Sie die die Logik für den vorgegeben Taschenrechner implementieren und diesen in Ihren Artikel einbinden.

Beachten Sie die Kriterien-Liste am Ende.
 - Visualisierung des Endeergebnis: PDF
 - Funktionsdemonstration Taschenrechner: Video

**Hinweis**: Die gezeigten Formulare müssen nicht an einen Server angebunden werden. Lassen Sie die Attribute "action" und "method" weg, damit beim Abschicken des Formulars wieder die aktuelle Seite aufgerufen wird.

#### Anforderungen an den Taschenrechner
 - Zwei Zahlen verrechnen können gemäss Videovorlage
 - Fehlerhafte Eingabe verhindern, korrigieren oder sinnvolle Fehlermeldung darstellen
 - Grundrechenoperationen
 - Weiterrechnen mit Ergebnis
 - Löschen der aktuellen Eingabe (C)

#### Vorgehen
 - Erstellen Sie den Wikipraktika Artikel anhand der Vorlage und gemäss der Visualisierung.
 - Stylen Sie den Wikipraktika-Artikel gemäss Visualisierung und Video.
 - Für den Taschenrechner gibt es eine fertige Vorlage inklusiv Styling aber ohne Funktionalität im Ordner template/calculator/. Programmieren Sie den Taschenrechner mit JavaScript. Passen Sie das HTML und das CSS des Taschenrechners **NICHT** an.
 - Binden Sie den Taschenrechner mittels iframe in den Wikipraktika-Artikel ein.
 - Programmieren Sie den Schriftgrössen-Wähler: Schreiben Sie dazu ein kleines Script, das den Schriftgrössen Slider überwacht und bei Änderung "style.fontSize" des HTML-Root-Elementes und den Titel des Sliders setzt. Benutzen Sie ein "output"-Element um die Schriftgrösse hinter dem Slider auszugeben. Aktualisieren Sie auch diesen Wert bei Änderung des Sliders.

#### Kriterien/Anforderungen
 - HTML5, CSS und JavaScript Standardkonformität muss erfüllt werden.
 - Überprüfen Sie ihre Arbeit mit dem	W3C Validator vor der Abgabe und beheben gefundene Fehler.
 - Ihre Lösung muss in den neusten Versionen von 2 der 4 grossen Browsern (**FF**, **GC**, ~~IE, AS~~) getestet worden sein und ohne Fehler funktionieren.

##### HTML/Struktur
 - Benuten Sie head/body, meta, header, footer, section, main, aside, nav, headings, div, p, form, span, time, small, ul/ol/dl, a, figure, figcaption, img, video, object, iframe, table, address, ... um die Inhalte semantisch zu strukturieren und Medien einzubinden.
 - Das Wikipraktika-Logo soll auf die aktuelle Seite verlinken.
 - Setzen Sie für die Links des Sprachmenüs das "hreflang"-Attribut.
 - Setzen Sie für das Zeitersparnis-Diagramm das "role"-Attribut.
 - Binden Sie das Zeitersparnis-Diagramm so ein, das die Animation korrekt funktioniert.
 - Benutzen Sie das time-Element für sämtliche Zeitangaben. Setzen Sie das "datetime"-Attribut.
 - Das Verwenden von deprecated-Tags und Attributen ist nicht erlaubt.
 - Setzen Sie Metatags anhand der Text-Vorlage.
 - Es darf kein Inhalt von der Textvorlage weggelassen werden!
 - Ergänzen Sie das Video mit den vorhandenen Untertitel. Nutzen Sie dazu "track".

##### CSS/Style
 - Lösen Sie folgendes mit **reinem** CSS (fügen sie keine zusätzlichen Elemente/Text ins HTML ein):
	- Titelnummerierung
	- Sprachspezifische Flaggen beim Sprachmenü (nutzen Sie "hreflang" und "before")
 **Tipp:** Nutzen Sie Selektoren für bereits vorhandene Attribute/Verschachtelungen.
 - Benutzen Sie effiziente Selektoren (z.B. Kindselektor statt Nachfahrenselektor).
 - Nutzen Sie sinnvolle Grössen- und Breitenangaben:
	- Nutzen Sie % damit sich ihre Webseite an die Grösse des Browsersfensters anpasst.
	- Setzen Sie eine sinnvolle Maximalgrösse für die Schreibmaschine, den Taschenrechner, das Diagramm und das N-Spire-Video.
 - Nutzen Sie rem und em sinnvoll
 - Definieren Sie die Höhe des Youtube-Video in Abhängigkeit der Seitenbreite. Tipp: calc() &rarr; Höhe = 56.25% der Seitenbreite - Margins. Benutzen Sie den gleichen Mechanismus für den Taschenrechner.
 - Nutzen Sie nth-child für die Einfärbung der Tabellenzeilen.
 - Definieren Sie für die Formularelemente hover- und active-Styles gemäss Video.
 - Setzen Sie bei den Formularelementen not() ein, um einzelne Elemente von generischeren Styles auszuklammern.

##### JavaScript
 - Unsicheres JavaScript ("eval", "new function", ...) ist nicht erlaubt!
 - Gruppieren Sie die Funktionen ihres Codes in "Core" (Taschenrechner-Logik) und "UI" (Ansteuerung der Buttons, Handling der Events, Aufruf von Core-Funktionalität, ...). Im Core sind keine DOM-Zugriffe erlaubt. Im UI ist keine Taschenrechnerlogik (z.B. Wertespeicher o.Ä.) erlaubt.

#### Abgabe
Sie werden als Gruppe ihre Lösung während der Übungsstunde dem Übungsleiter präsentieren.
Zusätzlich schicken Sie dem Übungsleiter ihre Lösung als zip per E-Mail (**OHNE** den Ordner "media"!)
