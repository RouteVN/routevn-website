"""Extract the landing demo's entries from an official JMdict_e.gz download.
Usage: python3 scripts/extract-jmdict-demo.py /path/to/JMdict_e.gz
Refresh the source monthly and rerun; no network access is needed by this script.
The dictionary subset retains the JMdict CC BY-SA 4.0 license.
"""
import gzip, hashlib, json, re, sys, xml.etree.ElementTree as ET
from pathlib import Path
root=Path(__file__).resolve().parents[1]
source=Path(sys.argv[1]); raw=source.read_bytes(); xml=gzip.decompress(raw)
entities={description:code for code,description in re.findall(r'<!ENTITY\s+([\w-]+)\s+"([^"]+)"',xml.decode('utf-8'))}
wanted={'1288810','1586270','1006970','1293990','1002980','1580620','2819970','2087820','1628500','2028970','1008490','1521400','1587040'}
entries={}; originals=[]
for node in ET.fromstring(xml).findall('entry'):
 key=node.findtext('ent_seq')
 if key not in wanted:continue
 entries[key]={'id':key,'forms':[x.text for x in node.findall('k_ele/keb')],'readings':[x.text for x in node.findall('r_ele/reb')],'senses':[{'pos':[x.text for x in sense.findall('pos')],'posCodes':[entities.get(x.text,x.text) for x in sense.findall('pos')],'glosses':[x.text for x in sense.findall('gloss') if x.get('{http://www.w3.org/XML/1998/namespace}lang','eng')=='eng'],'info':[x.text for x in sense.findall('s_inf')],'misc':[x.text for x in sense.findall('misc')],'miscCodes':[entities.get(x.text,x.text) for x in sense.findall('misc')]} for sense in node.findall('sense')]}
 originals.append(ET.tostring(node,encoding='unicode'))
assert set(entries)==wanted
pub=root/'static/public/reader/web-extractor';pub.mkdir(parents=True,exist_ok=True)
(pub/'demo-jmdict.js').write_text('// JMdict subset © James William BREEN and EDRDG. CC BY-SA 4.0.\n// https://www.edrdg.org/edrdg/licence.html\nexport const dictionary = '+json.dumps(entries,ensure_ascii=False,indent=2)+';\n')
original=root/'internal/asset-sources/web-extractor-demo';original.mkdir(parents=True,exist_ok=True)
(original/'jmdict-entries.xml').write_text('<JMdict>\n'+''.join(originals)+'\n</JMdict>')
(original/'jmdict-provenance.json').write_text(json.dumps({'source':'https://www.edrdg.org/pub/Nihongo/JMdict_e.gz','sha256':hashlib.sha256(raw).hexdigest(),'entries':sorted(wanted),'license':'CC BY-SA 4.0','changes':'Selected entries and fields; XML entities expanded. Glosses unchanged.','refresh':'Download current JMdict_e.gz and rerun scripts/extract-jmdict-demo.py monthly.'},indent=2)+'\n')
