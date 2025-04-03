import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error(" MONGO_URI non défini dans l'environnement !");
    }

    console.log(` Connexion à MongoDB: ${process.env.MONGO_URI}`);

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(` MongoDB connecté : ${conn.connection.host}`);
  } catch (err) {
    console.error(`Erreur de connexion MongoDB: ${err.message}`);
    process.exit(1); // Quitte le processus en cas d'erreur critique
  }
};

// Gère les erreurs après la connexion
mongoose.connection.on("error", (err) => {
  console.error(` Erreur MongoDB après connexion: ${err.message}`);
});

export default connectDB;