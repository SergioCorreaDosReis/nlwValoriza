import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";
import { classToPlain } from "class-transformer";

class ListTagService {
  async execute() {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    const tags = await tagsRepositories.find();
    // Cria novos objetos apartir dos obejtos que já estão no type orm na entity
    return classToPlain(tags);
  }
}

export { ListTagService };
