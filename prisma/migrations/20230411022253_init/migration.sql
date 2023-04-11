-- CreateTable
CREATE TABLE "Peliculas" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "detalles" TEXT NOT NULL,
    "calificacion" INTEGER[],

    CONSTRAINT "Peliculas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuarios" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("id")
);
