BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "curriculo" (
	"idCurriculo"	INTEGER,
	"item"	TEXT,
	"descricao"	TEXT,
	"idCategoria"	INTEGER,
	PRIMARY KEY("idCurriculo" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "categoria" (
	"idCategoria"	INTEGER,
	"nomeCategoria"	TEXT,
	PRIMARY KEY("idCategoria" AUTOINCREMENT)
);
INSERT INTO "curriculo" VALUES (1,'Consultor','Trabalho de consultoria para plano odontológico',1);
INSERT INTO "curriculo" VALUES (2,NULL,NULL,NULL);
INSERT INTO "categoria" VALUES (1,'Consultoria');
COMMIT;
