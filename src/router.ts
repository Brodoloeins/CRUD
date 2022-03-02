import { Router } from "express";
import { CreateCategoryController } from "./controllers/Category/CreateCategoryController";
import { GetAllCategoriesController } from "./controllers/Category/GetAllCategoriesController";
import { DeleteCategoryController } from "./controllers/Category/DeleteCategoryController";
import { UpdateCategoryController } from "./controllers/Category/UpdateCategoryController";
import { CreateVideoController } from "./controllers/Videos/CreateVideoController";
import { GetAllVideosController } from "./controllers/Videos/GetAllVideosController";

const routes = Router();

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);

routes.post("/videos", new CreateVideoController().handle);
routes.get("/videos", new GetAllVideosController().handle)

export { routes };
