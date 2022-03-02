import { Request, Response } from "express";
import { DeleteCategoryService } from "../../services/Category/DeleteCategoryService";


class DeleteCategoryController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const service = new DeleteCategoryService();

        const result = await service.execute(id);

        if (result instanceof Error) {
            return res.status(404).json(result.message)
        }

        return res.status(204).end();
    }
}

export { DeleteCategoryController }