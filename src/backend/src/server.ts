import express from "express";
import cors from 'cors';
import { envConfig } from "./config/env.config";

import metadataRouter from "./api/routes/metadata.routes";
import statsRouter from "./api/routes/stats.routes";
import { errorHandler, notFoundHandler } from "./middlewares/error.middleware";

const app = express();
const PORT = envConfig.PORT;

app.use(cors());
app.use(express.json());

app.use("/metadata", metadataRouter);
app.use("/stats/", statsRouter);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
