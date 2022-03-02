import { getRepository } from "typeorm";
import { Video } from "../../entities/Videos";

class GetAllVideosService {
    async execute() {
        const repo = getRepository(Video);

        const videos = await repo.find({ 
            relations: ['category']
        });

        return videos;
    }
}

export { GetAllVideosService };
