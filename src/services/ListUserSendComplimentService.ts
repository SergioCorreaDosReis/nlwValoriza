import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListUserSendComplimentService {
  async execute(user_id: string) {
    const complimentsRepositories = await getCustomRepository(
      ComplimentsRepositories
    );

    const compliments = await complimentsRepositories.find({
      where: {
        user_sender: user_id,
      },
      relations: ["userSender", "userReceiver", "tag"],
    });
    return compliments;
  }
}

export { ListUserSendComplimentService };
