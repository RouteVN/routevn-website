/** Shared, data-only dictionary provenance and safe HTML credits. Also loaded as a classic script. */
(() => {
  const CC = "https://creativecommons.org/licenses/by-sa/4.0/";
  const EDRDG = "https://www.edrdg.org/edrdg/licence.html";
  const translations = {
    en: [
      "Jim Breen / Electronic Dictionary Research and Development Group",
      EDRDG,
      "CC BY-SA 4.0",
      CC,
      false,
    ],
    de: [
      "Ulrich Apel and WaDoku contributors; EDRDG",
      "https://www.wadoku.de/wiki/pages/viewpage.action?pageId=357",
      "WaDoku free-distribution licenses; EDRDG terms",
      "https://www.wadoku.de/wiki/display/WAD/Wadoku.de-Daten%2BLizenz",
      false,
    ],
    ru: [
      "Warodai contributors; EDRDG",
      "https://www.warodai.ru/lookup/index.php",
      "CC BY-NC-ND 3.0 (Warodai); EDRDG terms",
      "https://creativecommons.org/licenses/by-nc-nd/3.0/",
      true,
    ],
    nl: [
      "Waran Jiten / KU Leuven contributors; EDRDG",
      "https://japansnederlandswoordenboek.org/",
      "CC BY-NC-SA 4.0 (Waran Jiten); EDRDG terms",
      "https://creativecommons.org/licenses/by-nc-sa/4.0/",
      false,
    ],
    sl: [
      "Kristina Hmeljak, Tomaž Erjavec, Irena Srdanović / jaSlo; EDRDG",
      "https://www.clarin.si/repository/xmlui/handle/11356/1050",
      "CC BY-SA 4.0",
      CC,
      false,
    ],
    fr: [
      "Jean-Marc Desperrier / Dictionnaire français-japonais; JMdict Internationalization contributors; EDRDG",
      "http://dico.fj.free.fr/",
      "Desperrier free-distribution EDICT terms; JMdict Internationalization CC BY-SA 3.0; EDRDG terms",
      "http://dico.fj.free.fr/copyright.php",
      false,
    ],
    es: [
      "HISPADIC contributors; Francisco Barberán / RUI; EDRDG",
      "https://www.edrdg.org/wwwjdic/wwwjdicinf.html",
      "Translation permissions under review",
      EDRDG,
      true,
    ],
    hu: [
      "István Varga / JHUNGDIC; EDRDG",
      "https://www.vargamakai.com/",
      "Translation permissions under review",
      EDRDG,
      true,
    ],
    sv: [
      "JSVEDIC / Japanska.se contributors; EDRDG",
      "https://www.japanska.se/",
      "Translation permissions under review",
      EDRDG,
      true,
    ],
  };
  // Operative source notices accompany exported extracts as well as packaged documentation.
  const translationNotices = {
    de: [
      '(Copyright (C) 1998-2007 Ulrich APEL)\nVersion 1.0 (20. Maerz 2001)\nDie WaDoku-Woerterbuchdatei ist Ergebnis eines von Ulrich Apel initiierten\nund von freiwilligen Mitarbeitern getragenes Projektes zur Erstellung eines\nfrei verfuegbaren japanisch-deutschen Woerterbuches in elektronischer  Form.\nDieses Woerterbuch ist gedacht als stets aktuelles, zunehmend verlaessliches\nund grundlegendes Nachschlagewerk fuer die japanische Sprache der Gegenwart.\nDie Woerterbuchdatei ist Freeware in der Bedeutung, dass sie - unter\nbestimmten Bedingungen - verwendet und auch weiterverteilt werden darf.  Die\nDatei unterliegt jedoch weiterhin dem Copyright und sie ist nicht umsonst!\nVon den Benutzerinnen und Benutzern der Datei wird erwartet, dass sie im\nRahmen der Verwendung des Woerterbuches zu seiner Verbesserung und seinem\nAusbau beitragen und den Fortgang des Projektes allgemein entsprechend ihren\nMoeglichkeiten unterstuetzen.  Dieses Woerterbuch ist nur so gut wie seine\nBenutzer.  Aktualitaet, Verlaesslichkeit und ein Umfang, mit dem man immer\nbesser arbeiten kann, laesst sich nur durch Mithilfe vieler kompetenter\nMitarbeiter erreichen.\nHeute kann kein zu einem bestimmten Zeitpunkt fertiggestelltes Woerterbuch\nmehr den Anspruch auf Gueltigkeit fuer Jahrzehnte erheben.  Eine\nWoerterbuch-Datei dieser Art muss staendig aktualisiert und ueberarbeitet\nwerden. Die Datei muss nach Moeglichkeit neuen Entwicklungen angepasst\nwerden.  Niemand kann derzeit vorhersagen, wie die Entwicklung von\nUebersetzungs-Tools, automatischer Sprachanalyse und Maschinen-Uebesetzung\nweitergehen wird.\nDie Koordination dieses Projektes uebernimmt zurzeit Ulrich Apel (E-Mail\n<apel@hus.osaka-u.ac.jp>).  Der Fortgang des Projektes wird diskutiert in\neiner eigenen Mailingliste.  Um sich in diese Woerterbuch-Mailingliste\neinzuschreiben, muss man eine E-Mail mit dem Text "SUBSCRIBE WADOKU-L" (ohne\ndie Anfuehrungszeichen) im Body der E-Mail an den Mailinglisten-Server\n<LISTSERV@LISTSERV.GMD.DE> schreiben.  Sollte das nicht klappen, kann auch\nUlrich Apel die Eintragung uebernehmen.\n* WORAUF BEZIEHT SICH DIESE LIZENZ?\nDiese Lizenz bezieht sich auf die reinen Daten des WaDoku-Projektes.  Die\nwichtigste Verteilungsform des Projektes sind die FileMaker-basierten\nDateien WaDokuDa.FMR und WaDokuJT.FMR, die mit den\nFileMaker-Runtime-Programmen "WaDokuJT Runtime" bzw. "WaDokuJT.exe"\nverwendet werden koennen.\nDie Daten dieser Dateien lassen sich ueber den Dialog "ファイル" (fairu =\nFile) => "取り込み／書き出し" (torikomi/kakidashi =\nDatei-Import/Datei-Export) => "レコード書き出し..." (rekoodo kakidashi ... =\nExport der Datensaetze ...) exportieren.  Wird die gesamte Datei exportiert,\nso steht in der ersten Zeile bzw. im ersten Datensatz "WaDokuDa:\njapanisch-deutsche Woerterbuch-Datei" und der Copyrighthinweis.  In der\nersten Zeile befinden sich weiter Angaben ueber das Erstellungsdatum der\naktuellen Datei und die Zahl der Datensaetze zu diesem Zeitpunkt.\nDiese Lizenz bezieht sich auf Daten, die aus dieser Datei exportiert oder\ndaraus kopiert wurden, sowie auf Dateien, die von auf diese Weise erstellten\nDateien abgeleitet wurden.\nSolche Ableitungen sind z.B. das Online-Woerterbuch\n<\nhttp://bunmei7.hus.osaka-u.ac.jp:591/WadokuJT/\n> oder die Datei\n"WaDokuDA.TXT" der Jamming-Version der Datei.  Es gibt weitere Adaptionen\nfuer verschiedene Computer-Systemplattformen und verschiedene\nAnwendungsprogramme.  Es wird darauf hingewiesen, dass andere Programme\neventuell die Moeglichkeiten der Datei nicht voll ausnutzen und die Datei\nfuer die Programme unter Umstaenden nicht optimal geeignet ist.\nDie Mutterdatei befindet sich im Besitz von Ulrich Apel.  Es gibt einige\nSpiegelungen der Datei, aber die aktuellste Version ist unter der URL\n<\nhttp://hus.osaka-u.ac.jp/download.html\n> erhaeltlich.\nFuer die Runtime-Programm "WaDokuJT Runtime" bzw. "WaDokuJT.exe" gelten\neigene Lizenzen.\n* HAFTUNGSAUSSCHLUSS\nDie Veroeffentlichung dieser Datei erfolgt in der Hoffnung, dass sie Ihnen\nvon Nutzen sein wird, aber OHNE JEDE GEWAEHRLEISTUNG - sogar ohne die\nimplizite Gewaehrleistung der MARKTREIFE oder der EIGNUNG FUER EINEN\nBESTIMMTEN ZWECK.\n* BEITRAEGE\nVon Benutzerinnen und Benutzern der WaDoku-Datei wird erwartet, dass sie\nsich an der Verbesserung und am Ausbau der Datei beteiligen.  Ein deutscher\nMuttersprachler braucht beispielweise nicht unbedingt einen Doktorgrad in\nJapanologie um deutsche Rechtschreibfehler zu korrigieren.\nIn der Datei WaDokuJT.fmr gibt es fuer neue Eintraege und Korrekturen ein\neigenes Layout und dazugehoerige Skripte.  Bearbeitungen, die auf anderen\nProgrammen als der FileMaker-Runtime beruhen, sollen sich so weit wie\nmoeglich an Codierung und Feldstruktur des Originals halten.\n* VERWENDUNG, KOPIEREN UND VERTEILUNG\na. Allgemeine Erlaubnis\nJede, jeder und jede Organisation, die bzw. der sich im Besitz einer oben\nbeschriebenen Kopie der WaDokuDa-Datei befindet - egal, ob sie bzw. er diese\nKopie ueber kostenlose Verteilung oder gegen Zahlung erhalten hat -,\ni.  darf diese Daten fuer persoenliche Zwecke, wie Unterstuetzung beim Lesen\nvon Texten, Forschung, Uebersetzungsdienstleistungen usw. verwenden\nii.  darf, soweit das nicht unten beschriebenen Einschraenkungen unterliegt,\nTeile und kurze Abschnitte der Datei an andere Personen oder Organisationen\nin Form von geschriebenen Texten, E-Mails etc. weitergeben.  Eine solche\nAktivitaet kann zur Erhebung einer Gebuehr fuehren.\niii.  muss sich an die unten beschriebenen Bedingungen fuer die Verteilung\nder Datei halten.\nb. Kostenlose Verteilung\nErlaubnis wird erteilt:\ni.  unveraenderte Kopien der WaDoku-Datei zu erstellen und diese zu\nverteilen, wenn sie zusammen mit dieser Lizenz und den Copyright-Hinweisen\nausgeliefert werden.  Eine Verteilung darf zu keiner finanziellen Verguetung\nfuehren, die die Kosten des Verteilungsmediums uebersteigt.\nii.  Kopien der WaDoku-Datei auf WWW- und ftp-Server zu legen, um sie\nweiterzuverteilen, vorausgesetzt, sie unterliegen den oben genannten\nBedingungen.\niii.  Auszuege und Untergruppen der WaDoku-Datei oder Dateien in anderen\nFormaten und Codierungen, die Material der WaDoku-Datei enthalten, zu\nerstellen und zu verteilen, wenn die Bedingungen erfuellt werden, die fuer\nunveraenderte Kopien gelten.\nc. Einbindung in freie Software und Server-Systeme\nErlaubnis wird erteilt:\ni.  die WaDoku-Datei als Teil von Software zu verteilen, die selbst\nkostenlos verteilt wird - unter der Voraussetzung, dass die Bedingungen fuer\nkostenlose Verteilung, wie sie oben beschrieben werden, eingehalten werden\nund unter der Voraussetzung, dass der Software-Dokumentation eine\nvollstaendige Erklaerung ueber die Herkunft der Daten beigefuegt wird.\nii.  die WaDoku-Datei oder Teile davon in WWW-Server und andere Server\neinzubinden, die ohne Bezahlung und Werbung betrieben werden, unter den\nVoraussetzungen, die fuer die oben beschriebene kostenlose Verteilung\ngelten.  Weiter muss ein vollstaendiger Hinweis auf die Herkunft der Daten\nauf dem Server angezeigt werden und auf der ersten Seite des entsprechenden\nServers muss ein Link zur vollstaendigen Lizenz und der\nUrheberrechts-Erklaerung zugaenglich sein.\nd. Shareware-Software\nErlaubnis wird erteilt, die Datei oder Teile davon auf "Shareware"-Basis\nzu verteilen und dafuer eine Verguetung von nicht mehr als 100$ zu erheben,\nunter folgenden Bedingungen:\ni.  der Verteiler informiert den Urheberrechtsinhaber, Ulrich Apel, im\nVorhinein ueber die Veroeffentlichung des Software-Paketes.\nii.  der Verteiler beteiligt das WaDoku-Projekt mit 10% der gesamten\nEinnahmen; die Ueberweisung hat alle drei Monate zu erfolgen.\niii.  die vollstaendige Lizenz zu den Daten und die Copyrighterklaerung wird\nmit allen Kopien verteilt.\niv. die Herkunft der Daten ist in der Software-Dokumentation vollstaendig\nanerkannt.\ne. Kommerzielle WWW-Server\nDie Daten duerfen ohne die vorherige Erlaubnis des Urheberrechtsinhabers\nnicht ueber WWW-Server erhaeltlich sein, fuer deren Benutzung Gebuehren\nerhoben werden oder die kommerzielle Werbung verwenden.  Eine Erlaubnis wird\nnormalerweise erteilt, wenn das WaDoku-Projekt an den Gewinnen beteiligt\nwird.\nf. Linux-Betreibssystem\nErlaubnis wird erteilt, die WaDoku-Daten in kostenlose Distributionen des\nGNU/Linux-Betriebssystemes und dazugehoerige Utilities und Pakete, wie SuSe,\nRed Hat, Debian einzubinden, unter der Voraussetzung, dass die Bedingungen\nfuer "Einbindung in freie Software und Server-Systeme" erfuellt werden.  In\nanderen Worten, kommerzielle Linux-Distributionen werden so betrachtet, dass\nsie die Bedingung einer "Gebuehr, die die Kosten des Verteilungsmediums\nnicht uebersteigt" erfuellen.\ng. kommerzielle Software-Pakete:\nDie WaDoku-Daten duerfen nicht in Software-Pakete eingebunden werden, die\nkommerziell verkauft werden oder ausschliesslich in einer Firma verwendet\nwerden, wenn das nicht vorher vom Urheberrechtsinhaber erlaubt wurde.\nNormalerweise wird eine nicht exklusive Lizenz, die Daten einzubinden, gegen\ndie Entrichtung einer Einmalzahlung oder gegen die Beteiligung an den\nTantiemen erteilt.  Die anderen Bedingungen fuer Shareware gelten auch hier.\nh. Gedruckte Woerterbuecher\nDer Inhalt der WaDoku-Daten darf ohne die ausdrueckliche Erlaubnis des\nUrheberrechtsinhabers selbst in Teilen nicht auf Papier und anderen Medien\nwie CD-ROM veroeffentlicht werden.  Eine etwaige Erlaubnis wird mindestens\nan die Bedingung geknuepft, dass die unter Zuhilfenahme der WaDoku-Datei\nentstandenen Daten und Werke uneingeschraenkt auch dem WaDoku-Projekt zur\nVerfuegung gestellt werden und dass die Herkunft der Daten vollstaendig\nanerkannt wird.\nZu beachten ist, dass in allen Faellen das Hinzufuegen von Material die\nRechte des Urheberrechtsinhabers in keiner Weise aufhebt oder einschraenkt.',
      'Version 1.0 (München, den 10.8.2011)\n1. Einleitung\nDie auf www.wadoku.de zur Verfügung gestellten Wörterbuchdaten beruhen auf dem von Ulrich Apel initiierten und von ihm und freiwilligen Mitarbeitern getragenen Projekt zur Erstellung eines frei verfügbaren japanisch-deutschen Wörterbuches in elektronischer Form. Dieses Wörterbuch ist gedacht als stets aktuelles, zunehmend verlässliches und grundlegendes Nachschlagewerk für die japanische Sprache der Gegenwart.\nDiese Lizenz für die Daten von www.wadoku.de ergänzt die\nWadoku-Datei-Lizenz von Ulrich Apel vom 20. März 2001\n.\nDas Urheberrecht für diese Daten liegt bei Ulrich Apel und weiteren Miturhebern (Siehe Punkt 3).\n2. Worauf bezieht sich diese Lizenz?\nDiese Lizenz bezieht sich auf die Wörterbuch-Daten, die auf der Webseite www.wadoku.de und ihren Unterseiten zur Verfügung gestellt werden. Die gesamten Wadoku-Daten wurden mit dem Willen zur Schaffung eines gemeinsamen Werkes gesammelt. Die Wadoku-Daten werden daher als ein einziges Werk mehrer Miturheber betrachtet.\nDie initiale Datendatei stammt ursprünglich von Herrn Ulrich Apel, der damit Haupturheber der Wadoku-Daten ist.\nDiese Wadoku-Datenlizenz bezieht sich zudem auf jede Form der Mitarbeit an den Wadoku-Daten offline sowie online zum Beispiel unter der Internetseite www.wadoku.de. Mit Mitarbeit sind sowohl Neueinträge wie auch Korrekturen oder Ergänzungen bestehender Einträge gemeint.\nAll die oben genannten Daten und erstellten Neueinträge sowie Korrekturen werden im Folgenden Wadoku-Daten genannt und als ein einheitliches Werk angesehen.\n3. Urheberrechte\nGemäß dem deutschen Urhebergesetz sind Urheberrechte Persönlichkeitsrechte und nicht übertragbar (§ 29 Satz 1 UrhG). Auf die urheberpersönlichkeitsrechtliche Bestandteile des Urheberrechtes kann auch unter Miturhebern nicht verzichtet werden. Jeder, der schöpferisch an den Wadoku-Daten mitarbeitet, wird automatisch zum Miturheber der Wadoku-Daten und Teil der gesetzlich begründeten Miturhebergemeinschaft (§ 8 Satz 1). Auf den quantitativen Umfang der Beteiligung der einzelnen Miturheber aufgrund der von ihnen geleisteten Arbeit, d.h. Umfang und Größe der Beiträge, kommt es für die Begründung der Miturheberschaft nicht an. Verwertungsrechte sind wie das Urheberrecht nicht übertragbar, lediglich die Einräumung von Nutzungsrechten ist möglich.\n4. Nutzungsrechte\nJeder Miturheber hat Verwertungsbefugnisse, die er einem Dritten in Gestalt von Nutzungsrechten überlassen kann (§ 31 UrhG).\nFür jede Mitarbeit bei den Wadoku-Daten gilt:\njede Mitarbeit wird als freiwillige Mitarbeit bei der Webseite www.wadoku.de und als Spende an den Verein Wadoku e.V. angesehen\njeder Mitarbeiter erteilt der Webseite www.wadoku.de und dem Verein Wadoku e.V. uneingeschränktes nicht-ausschließliches Nutzungsrecht für seine Bearbeitungen und Neueinträge, und seine unbefristete Zustimmung zur Veröffentlichung und Vervielfältigung seines Werkes gemäß dieser Lizenz.\njeder Mitarbeiter erlaubt die redaktionelle Bearbeitung seines Werkes durch andere, wie z.B. Veränderung oder Löschung eines Eintrages durch Editoren.\njeder Mitarbeiter verzichtet auf die namentliche Nennung seiner Urheberschaft (vorallem zum Zwecke einer kompakten Darstellung bei mehreren teilweise anonymen Miturhebern).\njeder Mitarbeiter überträgt der Webseite www.wadoku.de sowie dem Verein Wadoku e.V. das Recht, das Nutzungsrecht seines Werkes gemäß Vereinsziel auch an Dritte weiter zu lizenzieren. Auf gesetzliche Ansprüche, die sich aus dieser Weiterlizenzierung ergeben, wird zugunsten des Vereines Wadoku e.V. verzichtet.\n5. Nutzungsbedinungen\n5.1 Allgemeine Nutzung (online wie offline)\nJede, jeder und jede Organisation,\ndarf die Wadoku-Daten für persönliche Zwecke, wie Unterstützung beim Lesen von Texten, Forschung, Übersetzungen usw. verwenden.\ndarf ein Teil der Daten an andere Personen oder Organisationen in Form von geschriebenen Texten, E-Mails etc. unter Verweis auf diese Lizenz weitergeben.\n5.2 Offline-Nutzung der Downloads\nFolgende Nutzungsbedingungen gelten für alle angebotenen Wadoku-Daten Downloads: Jede, jeder und jede Organisation, erhält die Erlaubnis:\nunveränderte Kopien der angebotenen Wadoku-Daten zu erstellen und diese zu verteilen, wenn sie zusammen mit dieser Lizenz ausgeliefert werden.  Eine Verteilung darf zu keiner finanziellen Vergütung führen, die die Kosten des Verteilungsmediums übersteigt.\nKopien der Wadoku-Daten auf WWW- und ftp-Server zu legen, um sie weiterzuverteilen, vorausgesetzt, sie unterliegen den oben genannten Bedingungen.\nAuszüge und Untergruppen der Wadoku-Daten in anderen Formaten und Codierungen, die Material der Wadoku-Daten enthalten, zu erstellen und zu verteilen, wenn die Bedingungen erfüllt werden, die für unveränderte Kopien gelten.\n5.3 Einbindung in freie Software und Server-Systeme\nJede, jeder und jede Organisation erhält die Erlaubnis:\ndie Wadoku-Daten als Teil von Software zu verteilen, die selbst kostenlos verteilt wird - unter der Voraussetzung, dass die Bedingungen für kostenlose Verteilung, wie sie oben beschrieben werden, eingehalten werden und unter der Voraussetzung, dass der Software-Dokumentation eine vollständige Erklärung ueber die Herkunft der Daten beigefügt wird.\ndie Wadoku-Daten oder Teile davon in WWW-Server und andere Server einzubinden, die ohne Bezahlung und Werbung betrieben werden, unter den Voraussetzungen, die für die oben beschriebene kostenlose Verteilung gelten.  Weiter muss ein vollständiger Hinweis auf die Herkunft der Daten auf dem Server angezeigt werden und auf der ersten Seite des entsprechenden Servers muss ein Link zur vollständigen Lizenz und der Urheberrechts-Erklärung zugänglich sein, sowie ein sichtbarer Link auf www.wadoku.de unterhalb des Sucheingabefeldes.\n5.6 Linux-Betriebssystem\nErlaubnis wird erteilt, die Wadoku-Daten in kostenlose Distributionen des GNU/Linux-Betriebssystemes und dazugehörige Utilities und Pakete, wie SuSe, Red Hat, Debian einzubinden, unter der Voraussetzung, dass die Bedingungen für "Einbindung in freie Software und Server-Systeme" erfüllt werden.  In anderen Worten: kommerzielle Linux-Distributionen werden so betrachtet, dass sie die Bedingung einer "Gebühr, die die Kosten des Verteilungsmediums nicht übersteigt" erfüllen.\n5.7 Genehmigungspflichtige Verbreitung und Nutzung\nAlle anderen Nutzungs- und Verteilungsarten der Wadoku-Daten bedürfen der ausdrücklichen schriftlichen Genehmigung von Ulrich Apel und Wadoku e.V., die jährlich wieder neu bestätigt werden muss. Ohne diese gemeinschaftliche Genehmigung durch Ulrich Apel und Wadoku e.V. dürfen die Wadoku-Daten\nnicht in Software-Pakete eingebunden werden, die kommerziell verkauft werden oder ausschließlich in einer Firma verwendet werden.\nnicht über WWW-Server erhältlich sein, für deren Benutzung Gebühren erhoben werden oder die kommerzielle Werbung verwenden.\nnicht als Wörterbuch gedruckt oder auf anderen Medien wie CD-ROM veröffentlicht werden\nnicht als Bestandteil einer Shareware-Sofware verwendet werden\n6. Haftungsausschluss\nDie Wadoku-Daten wurden mit möglichst großer Sorgfalt erstellt und sind zum großen Teil mehrmals überprüft. Trotzdem übernehmen Ulrich Apel und der Verein Wadoku e.V. keinerlei Gewähr für die Richtigkeit, Aktualität, Vollständigkeit oder Qualität der bereitgestellten Informationen. Die Geltendmachung von Ansprüchen jeglicher Art ist ausgeschlossen.',
    ],
    nl: [
      "Waran Jiten / KU Leuven contributors. Dutch definitions and reformatted extracts: CC BY-NC-SA 4.0. Noncommercial sharing and adaptations only, with attribution and ShareAlike. https://creativecommons.org/licenses/by-nc-sa/4.0/",
    ],
    fr: [
      "Question de copyright à lire\navant de contribuer\nLes fichiers que vous pouvez télécharger ici ont été\ncréés à partir des données du projet de dictionnaire\nmultilingue JMdict de Jim Breen. Ce projet JMdict a été réalisé\nà partir du dictionnaire japonais-anglais Edict compilés\npar James William Breen, qui résulte de l'effort bénévole\nde très nombreuses personnes, et d'un dictionnaire japonais-allemand\nqui a été intégré à Edict après\naccord de ses auteurs.\nL'ensemble de ces données est fourni totalement gratuitement\net librement. Cela est possible, car ces dictionnaires ne comprennent aucun\nélément provenant d'un dictionnaire protégé\npar le droit d'auteur et toutes les personnes qui y ont contribué\nont placé leur contribution sous la licence qui protège le\ndictionnaire.\nLe dictionnaire est couvert par la licence suivante (\nen\nfrançais\n,\nen anglais\n) qui autorise\nn'importe qui à en faire une traduction comme nous sommes en train\nde le faire, à condition d'intégrer cette traduction au projet\nEDICT (seule la version originale de cette licence en anglais doit être\nconsidérée comme faisant foi, la version française\nest une traduction de ma part pour y donner un accès plus rapide)\nVotre contribution à ce projet de traduction du dictionnaire\nEDICT, sera donc intégrée au projet EDICT et sera ensuite\nlibrement à la disposition de tous ceux qui souhaitent étudier\nle japonais et pouvoir disposer d'un dictionnaire électronique libre\net évolutif, sans avoir à passer par l'anglais pour cela.\nCependant pour que cela marche, pour que ces données puissent\nêtre librement distribuées sans enfreindre aucun droit d'auteur,\nla contribution ne doit pas comprendre des données qui seraient\nla copie de l'information d'un dictionnaire commercial. .\nLa question des droits d'auteur sur un dictionnaire est délicate,\névidemment personne ne peut s'approprier la traduction d'un terme\net déclarer qu'il est interdit à quiconque d'utiliser le\nmême mot pour le traduire. En même temps, si vous prenez le\ncontenu d'un dictionnaire français/japonais, et que vous le recopiez\ndans votre propre dictionnaire, vous êtes clairement en train de\nvioler le droit d'auteur de ceux qui ont investi des efforts importants\npour créer ce dictionnaire.\nIl y a deux cas :\n- La traduction du terme est simple et évidente. Alors personne\nne pourra reprocher quoi que ce soit au fait que la traduction dans EDICT\njaponais/français soit la même que celle de tel ou tel dictionnaire.\nInu se traduit par chien, Neko par chat, c'est une évidence et il\nn'y a pas à se poser de question là dessus.\n- La traduction du terme est moins simple. Dans ce cas là, le\nou les termes utilisés pour le traduire seront beaucoup plus spécifiques\nà un dictionnaire précis. Si vous avez besoin de consulter\nun dictionnaire pour vous assurer que vous avez bien saisi le sens du terme,\nconsultez en plusieurs, je dirais au moins trois, et vérifiez que\nla traduction que vous proposez ne ressemble pas plus à l'un des\ntrois qu'aux deux autres.\nTraduction française de la licence de EDICT\n(seule la version originale de cette licence en anglais doit être\nconsidérée comme faisant foi, la version française\nest uniquement une traduction de ma part pour donner un accès plus\nimmédiat aux francophones)\nCopyright (C) 1994, 1995, 1996, 1997 James William Breen\nCette licence et cette notice de copyright s'appliquent au fichier de\ndictionnaire japonais/anglais EDICT, au fichier de documentation associé\nEDICT.DOC, et à tout fichier de donnée dérivé\nde l'un des deux.\nCopie et distribution :\nIl est permis librement de créer et de diffuser des copies intégrales\nde ce dictionnaire à condition de copier et de distribuer une copie\nde cette licence avec chaque exemplaire copié et diffusé.\nDe plus, toute diffusion de ce dictionnaire doit se faire à titre\ngracieux, la seule exception possible étant une indemnisation destinée\nà couvrir les frais de copie et de diffusion sans aucun bénéfice.\nIl est permis librement de créer et de diffuser des extraits\nou des copies partielles de ce dictionnaire à condition de respecter\nles mêmes conditions que pour la distribution et la copie de la version\nintégrale.\nIl est permis librement de créer des traductions de la partie\nanglaise de Edict dans d'autres langues et de diffuser cette traduction\nà condition de respecter les mêmes conditions que pour la\ndistribution et la copie de la version originale.\nUsage :\nCes fichiers peuvent être librement utilisés par des individus,\net peuvent être accédés par le logiciel, appartenant\nou manipulé par ces individus.\nLes fichiers, des extraits des fichiers, ou des traductions des fichiers\nne doivent pas être vendus en tant que partie d'un logiciel commercial,\nni ne peuvent être incorporés dans tout dictionnaire publié\nou tout autre document imprimé sans autorisation spécifique\ndu détenteur du copyright.\nTexte originale de la licence de EDICT\nLe fichier au format texte auquel vous pouvez accéder avec le lien\nci-dessous contient des informations sur l'historique du dictionnaire Edict,\nainsi que le texte complet de la licence en appendice A.\nCependant Jim Breen a récemment modifié sa license, autorisant\nl'utilisation commerciale, sous certaines conditions. J'insèrerais\nbientôt un lien vers la nouvelle version de la license.\nEdict.doc",
      "JMdict Internationalization contributors: CC BY-SA 3.0. https://tagaini.net/jmdict-i18n/ | https://creativecommons.org/licenses/by-sa/3.0/",
    ],
  };
  const modification =
    "Definitions extracted and reformatted by RouteVN Web Extractor. Original dictionary rights and applicable ShareAlike terms remain in force.";
  function safeUrl(value) {
    if (typeof value !== "string") return "";
    try {
      const u = new URL(value);
      return ["https:", "http:"].includes(u.protocol) && !u.username && !u.password ? u.href : "";
    } catch {
      return "";
    }
  }
  function escapeHtml(value) {
    return String(value ?? "").replace(
      /[&<>"']/g,
      (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]
    );
  }
  function isCustomSource(meta = {}) {
    if (meta.customSource === true) return true;
    if (!meta.source) return false;
    const url = safeUrl(meta.source);
    const wty = ["wty_en", "wty_ja"].includes(meta.family) || meta.sourceLanguage === "en";
    return !url.startsWith(
      wty
        ? "https://huggingface.co/datasets/daxida/wty-release/"
        : "https://github.com/yomidevs/jmdict-yomitan/releases/"
    );
  }
  function renderExampleJapanese(example = {}) {
    if (!example.ruby) return escapeHtml(example.japanese);
    return String(example.ruby)
      .split(/(<\/?(?:ruby|rt|rp)>)/gi)
      .map((part) => (/^<\/?(?:ruby|rt|rp)>$/i.test(part) ? part.toLowerCase() : escapeHtml(part)))
      .join("");
  }
  // Compact JMdict/Yomitan tags; retain unfamiliar archive-specific labels.
  const definitionTagLabels = {
    abbr: "abbreviation",
    arch: "archaic",
    uk: "usually written in kana",
    sl: "slang",
    n: "noun",
    v: "verb",
    "n-adv": "adverbial noun",
    "n-pr": "proper noun",
    "n-pref": "noun prefix",
    "n-suf": "noun suffix",
    "n-t": "temporal noun",
    pn: "pronoun",
    num: "number",
    ctr: "counter",
    adj: "adjective",
    "adj-i": "i-adjective",
    "adj-ix": "i-adjective (ii/yoi class)",
    "adj-na": "na-adjective",
    "na-adj": "na-adjective",
    "adj-no": "noun used with no",
    "adj-pn": "pre-noun adjective",
    "adj-f": "noun or verb used before a noun",
    "adj-t": "taru adjective",
    adv: "adverb",
    "adv-to": "adverb used with to",
    aux: "auxiliary",
    "aux-v": "auxiliary verb",
    "aux-adj": "auxiliary adjective",
    conj: "conjunction",
    cop: "copula",
    exp: "expression",
    int: "interjection",
    pref: "prefix",
    suf: "suffix",
    prt: "particle",
    v1: "Ichidan verb",
    "v1-s": "Ichidan verb (kureru class)",
    v5u: "Godan verb (-u)",
    v5k: "Godan verb (-ku)",
    v5g: "Godan verb (-gu)",
    v5s: "Godan verb (-su)",
    v5t: "Godan verb (-tsu)",
    v5n: "Godan verb (-nu)",
    v5b: "Godan verb (-bu)",
    v5m: "Godan verb (-mu)",
    v5r: "Godan verb (-ru)",
    "v5k-s": "Godan verb (iku/yuku class)",
    "v5r-i": "Godan verb (-ru, irregular)",
    "v5u-s": "Godan verb (-u, special class)",
    v5aru: "Godan verb (aru class)",
    vi: "intransitive verb",
    vt: "transitive verb",
    vk: "kuru verb",
    vs: "noun used with suru",
    "vs-i": "suru verb",
    "vs-s": "suru verb (special class)",
    "vs-c": "su verb",
    suru: "suru verb",
    vz: "zuru verb",
  };

  // Compact labels stay in the source language; full descriptions remain in tooltips.
  const compactDefinitionTagLabels = {
    Adjektiv: "Adj.",
    "transitives Verb": "transitiv",
    "intransitives Verb": "intransitiv",
    "reflexives Verb": "reflexiv",
    "reflexive verb": "reflexive",
    "ditransitive verb": "ditransitive",
    umgangssprachlich: "ugs.",
    colloquial: "informal",
    abbreviation: "abbr.",
    adjective: "adj.",
    "i-adjective": "i-adj.",
    "na-adjective": "na-adj.",
    "noun used with no": "no-adj.",
    "pre-noun adjective": "adjectival",
    "noun or verb used before a noun": "adjectival",
    "auxiliary verb": "aux. verb",
    "auxiliary adjective": "aux. adj.",
    "usually written in kana": "usually kana",
    "noun prefix": "prefix",
    "noun suffix": "suffix",
    "intransitive verb": "intransitive",
    "transitive verb": "transitive",
    "noun used with suru": "suru",
    "suru verb": "suru",
    "suru verb (special class)": "suru",
  };

  function compactDefinitionTag(label) {
    if (/^i-adjective(?: \([^)]+\))?$/.test(label)) return "i-adj.";
    if (/^Godan verb(?: \([^)]+\))?$/.test(label)) return "Godan verb";
    if (/^Ichidan verb(?: \([^)]+\))?$/.test(label)) return "Ichidan verb";
    return Object.hasOwn(compactDefinitionTagLabels, label) ? compactDefinitionTagLabels[label] : label;
  }

  function normalizeDefinitionTags(value) {
    const labels = [];
    for (const raw of Array.isArray(value) ? value : [value]) {
      if (typeof raw !== "string") continue;
      const text = raw.replace(/[★_]/g, "").trim();
      // Normalized values may pass through both enrichment and rendering.
      if (/^sense \d+$/.test(text) || Object.values(definitionTagLabels).includes(text)) {
        labels.push(text);
        continue;
      }
      let phrase = [];
      const flush = () => {
        if (phrase.length) labels.push(phrase.join(" "));
        phrase = [];
      };
      for (const token of text.split(/\s+/).filter(Boolean)) {
        const label = Object.hasOwn(definitionTagLabels, token)
          ? definitionTagLabels[token]
          : /^\d+$/.test(token) && !phrase.length
            ? `sense ${token}`
            : null;
        if (label) {
          flush();
          labels.push(label);
        } else phrase.push(token);
      }
      flush();
    }
    return labels.length ? [...new Set(labels)] : ["noun"];
  }

  function resolveDefinitionTags(value, descriptions = {}, preferAliases = false) {
    const labels = [];
    for (const raw of Array.isArray(value) ? value : [value]) {
      if (typeof raw !== "string") continue;
      const text = raw.trim();
      if (
        !Object.hasOwn(descriptions, text) &&
        (/^sense \d+$/.test(text) || Object.values(definitionTagLabels).includes(text))
      ) {
        labels.push(text);
        continue;
      }
      let unknown = [];
      const flush = () => {
        if (unknown.length) labels.push(unknown.join(" "));
        unknown = [];
      };
      for (const token of raw.split(/\s+/).filter(Boolean)) {
        const alias = Object.hasOwn(definitionTagLabels, token) ? definitionTagLabels[token] : "";
        const description =
          Object.hasOwn(descriptions, token) && typeof descriptions[token] === "string"
            ? descriptions[token].trim()
            : "";
        const label =
          /^\d+$/.test(token) && (preferAliases || !description)
            ? `sense ${token}`
            : preferAliases && alias
              ? alias
              : description || alias;
        if (label) {
          flush();
          labels.push(label);
        } else unknown.push(token);
      }
      flush();
    }
    return [...new Set(labels)];
  }

  function groupDictionaryEntries(entries = []) {
    const groups = new Map();
    for (const [index, entry] of entries.entries()) {
      const headword = entry.kanji || entry.word || "";
      const key = JSON.stringify([
        entry.dictionaryId || entry.source || "",
        headword || index,
        entry.reading || "",
      ]);
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(entry);
    }
    return [...groups.values()];
  }

  function definitionTags(entry) {
    return entry.otherForms
      ? []
      : (entry.tagLabels || normalizeDefinitionTags(entry.cleanPos || entry.pos)).filter(
          (label) => !/^sense \d+$/.test(label)
        );
  }
  function sharedDefinitionTags(group) {
    const senses = group.filter((e) => !e.otherForms);
    return senses.length > 1
      ? definitionTags(senses[0]).filter((tag) => senses.every((e) => definitionTags(e).includes(tag)))
      : [];
  }
  function renderDefinitionTags(tags, extraClass = "") {
    return tags.length
      ? `<div class="masshiro-yomi-pos masshiro-definition-tags ${extraClass}">${tags.map((label) => `<span class="masshiro-definition-tag" title="${escapeHtml(label)}">${escapeHtml(compactDefinitionTag(label))}</span>`).join(" ")}</div>`
      : "";
  }
  function referenceQuery(href) {
    if (typeof href !== "string" || !href.startsWith("?")) return "";
    const query = new URLSearchParams(href).get("query") || "";
    return query.trim() && query.length <= 256 ? query : "";
  }
  function renderReferenceText(reference) {
    const text = String(reference.text || "");
    let html = "",
      offset = 0;
    for (const link of reference.links || []) {
      if (!link.text) continue;
      const index = text.indexOf(link.text, offset);
      if (index < 0) continue;
      html += escapeHtml(text.slice(offset, index));
      const query = referenceQuery(link.href);
      const url = safeUrl(link.href);
      html += query
        ? `<a class="masshiro-reference-link" href="${escapeHtml(link.href)}" data-lookup-query="${escapeHtml(query)}">${escapeHtml(link.text)}</a>`
        : url
          ? `<a class="masshiro-reference-link" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.text)}</a>`
          : escapeHtml(link.text);
      offset = index + link.text.length;
    }
    return html + escapeHtml(text.slice(offset));
  }
  function bindReferenceLinks(card, lookup) {
    lookup?.bindCard?.(card);
    card?.querySelectorAll?.("a[data-lookup-query]").forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        void lookup.followReference(link.dataset.lookupQuery);
      });
    });
  }

  function renderDefinitionGlossary(entry) {
    if (!entry.definitionSenses?.length) {
      return `<ul class="masshiro-yomi-meanings" dir="auto">${(entry.meanings || []).map((meaning) => `<li>${escapeHtml(meaning)}</li>`).join("")}</ul>`;
    }
    const roots = [],
      stack = [];
    for (const sense of entry.definitionSenses) {
      const depth = Math.max(0, Math.min(Number(sense.depth) || 0, stack.length, 8));
      const node = { ...sense, children: [] };
      if (depth) stack[depth - 1].children.push(node);
      else roots.push(node);
      stack[depth] = node;
      stack.length = depth + 1;
    }
    const english = entry.dictionaryId === "wty_en:en";
    const render = (nodes) =>
      nodes
        .map((node) => {
          const badges = (node.tags || [])
            .map(
              (tag) =>
                `<span class="masshiro-definition-tag" title="${escapeHtml(tag.title || tag.label)}">${escapeHtml(compactDefinitionTag(tag.title || tag.label))}</span>`
            )
            .join(" ");
          const tags = !badges
            ? ""
            : english
              ? `<div class="masshiro-yomi-pos masshiro-definition-tags">${badges}</div>`
              : `<span class="masshiro-sense-tags">${badges}</span> `;
          const children = !node.children.length
            ? ""
            : english
              ? `<ol class="masshiro-sense-list masshiro-subsenses">${render(node.children)}</ol>`
              : `<ul>${render(node.children)}</ul>`;
          return `<li>${tags}<span class="masshiro-gloss-text">${escapeHtml(node.text)}</span>${children}</li>`;
        })
        .join("");
    return `<ul class="masshiro-yomi-meanings masshiro-glossary-tree${english ? " masshiro-english-glossary" : ""}" dir="auto">${render(roots)}</ul>`;
  }

  // Archive rows are not necessarily individual senses. Project bundled English
  // meanings into the same presentation groups as JMdict without changing data.
  function presentationSenses(entry) {
    if (entry.dictionaryId !== "wty_en:en" || entry.otherForms || !entry.definitionSenses?.length)
      return [entry];
    const sections = [];
    for (const sense of entry.definitionSenses) {
      if (!sections.length || !(Number(sense.depth) > 0)) sections.push([]);
      sections[sections.length - 1].push(sense);
    }
    return sections.map(([root, ...children], index) => ({
      ...entry,
      tagLabels: [
        ...new Set([...definitionTags(entry), ...(root.tags || []).map((tag) => tag.title || tag.label)]),
      ],
      meanings: [root.text],
      definitionSenses: [{ ...root, depth: 0, tags: [] }, ...children],
      relatedTerms: index === 0 ? entry.relatedTerms : [],
      examples: index === 0 ? entry.examples : [],
    }));
  }

  function renderCorpusExamples(entry) {
    return (entry.examples || [])
      .filter((example) => example.sourceUrl && example.licenseUrl)
      .map(
        (example) => `<div class="masshiro-yomi-example-box masshiro-corpus-example">
        <div class="masshiro-example-ja" lang="ja">${escapeHtml(example.japanese)}</div>
        <div class="masshiro-example-en" lang="en">${escapeHtml(example.english)}</div>
      </div>`
      )
      .join("");
  }

  function renderDictionaryMatches(entries = []) {
    const isSecondarySense = (entry) =>
      definitionTags(entry).some((tag) =>
        /^(?:name|proper noun|proper name|surname|given name|prop-n|interjection(?: \(kandoushi\))?|intj)$/i.test(
          tag
        )
      );
    const primary = [],
      secondary = [];
    for (const group of groupDictionaryEntries(entries.flatMap(presentationSenses))) {
      const ordinary = group.filter((entry) => !entry.otherForms && !isSecondarySense(entry));
      const deferred = group.filter((entry) => !entry.otherForms && isSecondarySense(entry));
      const forms = group.filter((entry) => entry.otherForms);
      if (ordinary.length) primary.push([...ordinary, ...forms]);
      else if (!deferred.length) primary.push(forms);
      if (deferred.length) secondary.push([...deferred, ...(ordinary.length ? [] : forms)]);
    }
    const groups = [...primary, ...secondary];
    const renderEntry = (entry, index, shared = []) => {
      if (entry.otherForms) {
        return `<div class="masshiro-definition-entry" role="group" aria-label="Other forms"><strong>Other forms</strong><ul class="masshiro-other-forms" dir="auto">${entry.otherForms.map((form) => `<li>${escapeHtml(form)}</li>`).join("")}</ul></div>`;
      }
      const pos = definitionTags(entry).filter((tag) => !shared.includes(tag));
      const meanings = Array.isArray(entry.meanings) ? entry.meanings : [];
      const tagsHtml = renderDefinitionTags(pos);
      return `<div class="masshiro-definition-entry" role="group" aria-label="Definition ${index + 1}">${tagsHtml}${meanings.length ? renderDefinitionGlossary(entry) : '<ul class="masshiro-yomi-meanings"><li>Searching dictionary...</li></ul>'}${renderRelatedTerms(entry)}${renderCorpusExamples(entry)}</div>`;
    };
    let definitionIndex = 0;
    const renderGroup = (group) => {
      const entry = group[0];
      const headword = entry.kanji || entry.word || "";
      const reading = entry.reading || "";
      const heading =
        groups.length > 1 && headword
          ? `<div class="masshiro-yomi-match-heading" dir="auto"><strong>${escapeHtml(headword)}</strong>${reading && reading !== headword ? ` <span>【${escapeHtml(reading)}】</span>` : ""}</div>`
          : "";
      const senses = group.filter((e) => !e.otherForms);
      const forms = group.filter((e) => e.otherForms);
      const shared = sharedDefinitionTags(group);
      const content = senses.map((e) => renderEntry(e, definitionIndex++, shared));
      const definitions =
        content.length > 1
          ? `<ol class="masshiro-sense-list">${content.map((html) => `<li>${html}</li>`).join("")}</ol>`
          : content.join("");
      return `<div class="masshiro-headword-group">${heading}${renderDefinitionTags(shared, "masshiro-shared-tags")}${definitions}${forms.map((e) => renderEntry(e, 0)).join("")}</div>`;
    };
    const initial = groups.slice(0, 2).map(renderGroup).join("");
    const remaining = groups.slice(2);
    return (
      initial +
      (remaining.length
        ? `<details class="masshiro-more-matches"><summary>Show ${remaining.length} more ${remaining.length === 1 ? "match" : "matches"}</summary>${remaining.map(renderGroup).join("")}</details>`
        : "")
    );
  }
  function renderRelatedTerms(entry) {
    return (entry.relatedTerms || [])
      .filter((r) => ["references", "antonyms"].includes(r.kind))
      .map(
        (r) =>
          `<div class="masshiro-related-term" dir="auto"><strong>${r.kind === "antonyms" ? "Antonyms" : "See also"}:</strong> ${renderReferenceText(r)}</div>`
      )
      .join("");
  }
  function catalogAttribution(meta = {}) {
    if (
      meta.family === "kanjium_pitch" &&
      !meta.customSource &&
      (!meta.source || meta.archiveSha256 === globalThis.__MasshiroPitch?.archiveSha256)
    ) {
      return {
        title: "Kanjium Pitch Accents",
        creators: "Uros Ozvatic (Kanjium)",
        sourceUrl: "https://github.com/mifunetoshiro/kanjium",
        license: "CC BY-SA 4.0",
        licenseUrl: CC,
        notice:
          "Japanese pitch accent data by Uros Ozvatic through Kanjium. Original contributors retain their rights. Provided without warranty.",
        modification:
          "Converted to Yomitan metadata by RouteVN Web Extractor, under CC BY-SA 4.0. Two unsupported source records are omitted; see Sources and licenses for the original notices and modifications.",
        additionalNotices: [],
        reviewRequired: false,
        legacy: false,
        articleLinksRequired: false,
      };
    }
    const wty = ["wty_en", "wty_ja"].includes(meta.family) || meta.sourceLanguage === "en";
    const lang = meta.targetLanguage || String(meta.language || "en").replace(/^wty-/, "");
    const original = meta.originalMetadata || {};
    const item = wty
      ? [
          "Wiktionary contributors",
          "https://huggingface.co/datasets/daxida/wty-release",
          "CC BY-SA 4.0",
          CC,
          false,
        ]
      : translations[lang] || translations.en;
    const custom = isCustomSource(meta);
    return {
      title: String(original.title || meta.title || (wty ? "Wiktionary" : "JMdict")),
      creators: custom ? String(original.author || "Creator not provided by the archive") : item[0],
      sourceUrl: custom ? safeUrl(original.url || meta.source) : item[1],
      license: custom ? String(original.license || "License not provided by the archive") : item[2],
      licenseUrl: custom ? safeUrl(original.licenseUrl || original.license) : item[3],
      notice:
        wty && !custom
          ? "Wiktionary text via Kaikki/Wiktextract and wty. Article links identify contributors through page histories."
          : custom
            ? "Custom archive: verify the original notices before redistribution."
            : "Japanese dictionary material is copyright Jim Breen and EDRDG; translation contributors retain their rights. Provided without warranty. See Sources and licenses for documentation.",
      additionalNotices: [
        ...(!wty && !custom ? translationNotices[lang] || [] : []),
        original.attribution,
        original.description,
        original.author ? `Archive prepared by ${original.author}` : "",
        ...(Array.isArray(meta.notices) ? meta.notices : []).map((n) => `${n?.filename}\n${n?.text}`),
      ].filter((value) => typeof value === "string" && value.trim()),
      reviewRequired: custom || item[4],
      legacy: (meta.provenanceVersion || 0) < (wty ? 2 : 1),
      modification:
        !custom && item[2] === "CC BY-SA 4.0"
          ? `${modification} RouteVN Web Extractor's reformatted dictionary text is also provided under CC BY-SA 4.0.`
          : modification,
      articleLinksRequired: wty && !custom,
    };
  }
  function sourceUrls(content) {
    const found = new Set();
    function visit(node) {
      if (!node || typeof node !== "object") return;
      if (Array.isArray(node)) {
        node.forEach(visit);
        return;
      }
      const url = safeUrl(node.href);
      if (url) found.add(url);
      if (node.content) visit(node.content);
    }
    visit(content);
    return [...found];
  }
  function renderAttribution(entry = {}, expandable = true) {
    const a = entry.attribution;
    if (!a)
      return `<div class="masshiro-source-credit">${escapeHtml(entry.source || "Dictionary")}: source details unavailable; update the dictionary in Sources and licenses.</div>`;
    const link = (url, label) =>
      safeUrl(url)
        ? `<a href="${escapeHtml(safeUrl(url))}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a>`
        : escapeHtml(label);
    const urls = [
      ...new Set((Array.isArray(entry.sourceUrls) ? entry.sourceUrls : []).map(safeUrl).filter(Boolean)),
    ];
    const example = entry.examples?.find((example) => example.sourceUrl && example.licenseUrl);
    const exampleCredit = example
      ? `<div>Example sentences: ${link(example.sourceUrl, example.source)} · ${link(example.licenseUrl, example.license)}</div>`
      : "";
    const body = `<div>${link(a.sourceUrl, a.creators || a.title)}</div><div>${link(a.licenseUrl, a.license || "License not provided")}</div>${urls.map((url, i) => `<div>${link(url, `Original source ${i + 1}`)}</div>`).join("")}<div>${escapeHtml(a.notice)}</div>${exampleCredit}${(Array.isArray(a.additionalNotices) ? a.additionalNotices : []).map((n) => `<div>${escapeHtml(n)}</div>`).join("")}<div>${escapeHtml(a.modification || modification)}</div>${a.legacy ? "<div>Update this dictionary to restore original notices and article links.</div>" : ""}${a.articleLinksRequired && entry.sourceUrls !== undefined && !urls.length ? "<div>Original article links are missing for this entry; attribution needs verification before sharing.</div>" : ""}${a.reviewRequired ? "<div>Some source permissions remain under review. This is not clearance for redistribution.</div>" : ""}`;
    return expandable
      ? `<details class="masshiro-source-credit"><summary>Source and license</summary>${body}</details>`
      : `<div class="masshiro-source-credit">${body}</div>`;
  }
  function renderPopupAttribution(entry, disclaimerUrl) {
    return `<details class="masshiro-source-credit masshiro-dictionary-info">
      <summary aria-label="Source and license"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7v1"/></svg></summary>
      <dialog class="masshiro-dictionary-info-content" aria-label="Dictionary source and disclaimer">
        <button type="button" class="masshiro-credit-close" aria-label="Close dictionary information">×</button>
        <h2>${escapeHtml(entry.source || "Dictionary")}</h2>
        ${renderAttribution(entry, false)}
        <p><a class="masshiro-disclaimer-link" href="${escapeHtml(disclaimerUrl)}" target="_blank" rel="noopener noreferrer">Dictionary sources, licenses and disclaimers</a></p>
      </dialog>
    </details>`;
  }
  const boundInfoRoots = new WeakSet();
  function bindDictionaryInfo(root, onOpen) {
    if (boundInfoRoots.has(root)) return;
    boundInfoRoots.add(root);
    const close = (dialog) => {
      const details = dialog.closest(".masshiro-dictionary-info");
      dialog.close();
      details.open = false;
      details.querySelector("summary").focus({ preventScroll: true });
    };
    root.addEventListener(
      "click",
      (event) => {
        const summary = event.target.closest?.(".masshiro-dictionary-info > summary");
        if (summary) {
          event.preventDefault();
          const details = summary.parentElement;
          details.open = true;
          details.querySelector("dialog").showModal();
          onOpen?.();
        }
        const button = event.target.closest?.(".masshiro-credit-close");
        if (button) {
          event.preventDefault();
          close(button.closest("dialog"));
        }
      },
      true
    );
    root.addEventListener(
      "cancel",
      (event) => {
        if (event.target.matches("dialog.masshiro-dictionary-info-content")) {
          event.preventDefault();
          close(event.target);
        }
      },
      true
    );
    window.addEventListener(
      "keydown",
      (event) => {
        const dialog = root.querySelector("dialog.masshiro-dictionary-info-content[open]");
        if (dialog && event.key === "Escape") {
          event.preventDefault();
          event.stopImmediatePropagation();
          close(dialog);
        }
      },
      true
    );
  }
  globalThis.__MasshiroAttribution = Object.freeze({
    renderPopupAttribution,
    bindDictionaryInfo,
    catalogAttribution,
    sourceUrls,
    renderAttribution,
    safeUrl,
    escapeHtml,
    isCustomSource,
    renderExampleJapanese,
    renderDictionaryMatches,
    renderDefinitionGlossary,
    groupDictionaryEntries,
    definitionTags,
    sharedDefinitionTags,
    referenceQuery,
    bindReferenceLinks,
    renderRelatedTerms,
    normalizeDefinitionTags,
    resolveDefinitionTags,
    compactDefinitionTag,
  });
})();
