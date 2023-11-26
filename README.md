# Big-Data-Abgabe2_V3

Zum Starten des Docker-Projektes muss folgender Befehl in der Konsole ausgeführt werden:
Docker-Compose up

Durch den Befehl werden zwei Docker Container gestartet, welche sich automatisch verbinden und die gewünschten Anforderungen erfüllen. 
Alle Dependencies werden automatisch installiert und konfiguriert.
Falls Packages oder Libraries fehlen, werden diese automatisch heruntergeladen und installiert.

Der Server läuft unter http://localhost:3000
Es können Daten in die Datenbank eingefügt werden über das JS.
Die Datenbank wird als Tabelle angezeigt.

curl http://localhost:3000 und curl http://localhost:3306 sind aufrufbar.
Allerdings kann auch die Website über den Browser aufgerufen werden, um die Funktionalität zu testen.



## Teil 1 – Bereitstellen einer Datenbank als Docker


1. Muss – Die Datenbank muss erreichbar sein.
    * Die Datenbank ist erreichbar

2. Muss - es muss ein minimalisiertes Docker Image verwendet werden
    * Ist erfüllt. Es wurde das minimalisierte Images zu verwenden.
   
3. Muss - Der Code muss bei der Abgabe lauffähig sein, das wird via do-
cker build und docker run überprüft.
    * Ist erfüllt.

4. Muss – Die Datenbank soll nach Beendigung ihren Zustand behalten.
Bitte nehmen sie in den Pfad für die Persistenz ihre Studienkürzel
(wi22xxxx) auf. Ein Beispielpfad lautet z.B. „/var/lib/wi123456“
    * Ist erfüllt. Es wurde ein Volumen erstellt, worauf die Image zugreift.

5. Soll - Nach Möglichkeit sollen aktuelle Softwarepakete verwendet wer-
den
    * Ist erfüllt.

6. Soll - Der Code soll dementsprechend dokumentiert sein, insb. ge-
schriebene Funktionen müssen/sollen eine Dokumentation enthalten. 
Bitte dokumentieren sie daher im Readme.md einen entsprechenden
Aufruf ihres Codes.
    * Ist erfüllt. Es wurde eine Readme.md erstellt. Es wurd nur der Command Docker-compose up benötigt.
    * Den Rest übernimmt Docker. Die Website und die services sind über den localhost erreichbar.

7. Soll – Wir die Datenbank besonders konfiguriert, so sollen die Konfigu-
rationsfiles beim Erstellen eingebunden und ausgeführt werden
    * Eine init.sql Datei wurde erstellt, welche die Datenbank konfiguriert und die Tabelle erstellt.
    * Diese ist im Dockerfile eingebunden und wird beim Erstellen ausgeführt.

## Teil 2 - Entwickeln einer Docker Application

8. Muss - es dürfen keine sicherheitssensitiven Informationen, wie Benut-
zernamen oder Passwörter im Docker File stehen
    * Ist erfüllt.

9. Muss - ein Ressourcen File muss vorhanden sein (setup.py, pom.xml,
build.sbt…) wo alle Abhängigkeiten aufgelistet werden.
    * Ist erfüllt.

10. Muss - es muss ein minimalisiertes Docker Image verwendet werden
    * Ist erfüllt. Es wurde das minimalisierte Images zu verwenden.
    
11. Muss - der eingepackte Service muss extern erreichbar sein. Das wird
via curl oder postman überprüft.


13.  Muss - Der Code muss bei der Abgabe lauffähig sein, das wird via do-
cker build und docker run überprüft.
    * Ist erfüllt.

14.  Soll - Nach Möglichkeit sollen aktuelle Softwarepakete verwendet wer-
den
    * Ist erfüllt.
  
15.  Soll - Der Code soll dementsprechend dokumentiert sein, insb. ge-
schriebene Funktionen müssen/sollen eine Dokumentation enthalten.
Bitte dokumentieren sie daher im Readme.md einen entsprechenden
Aufruf ihres Codes.
    * Ist erfüllt.

16.  Soll – es soll auf den anderen Container zugegriffen werden. Je nach
Programmiersprache kann ein Datenbankdriver oder ORM Wrapper
verwendet werden.
a. Python: SQLAlchemy oder psycopg2
b. Java: JDBC-Driver oder Spring,Hibernate, JPA


## Teil 3 Bewertungskriterien


17. Muss - Das Compose file soll via „docker-compose up” lauffähig sein.
    * Ist erfüllt
18. Muss - Es soll ein eigenes Netzwerk verwendet werden
    * Ist erfüllt. Es wird ein Netzwerk erstellt, welches die beiden Container verbindet.
    * Dieses Netzwerk lautet TestNetwork.
19. Muss - Der Microservice soll via curl aufrufbar sein
    * curl http://localhost:3000 und curl http://localhost:3306 sind aufrufbar.


