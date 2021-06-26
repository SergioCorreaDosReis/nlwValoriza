import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middleware/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticate } from "./middleware/ensureAuthenticate";
import { ListUserSendComplimentController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentController } from "./controllers/ListUserReceiveComplimentsController";
import { ListTagController } from "./controllers/ListTagController";
import { ListUsersController } from "./controllers/ListUsersController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentController = new ListUserSendComplimentController();
const listUserReceiveComplimentController = new ListUserReceiveComplimentController();
const listTagController = new ListTagController();
const listUsersController = new ListUsersController()



router.post("/users", createUserController.handle);
router.get("/users",ensureAuthenticate, listUsersController.handle)

router.post(
  "/tags",
  ensureAuthenticate,
  ensureAdmin,
  createTagController.handle
);
router.get("/tags", ensureAuthenticate, listTagController.handle);


router.post("/login", authenticateUserController.handle);
router.post(
  "/compliments",
  ensureAuthenticate,
  createComplimentController.handle
);

router.get(
  "/users/compliments/send",
  ensureAuthenticate,
  listUserSendComplimentController.handle
);

router.get(
  "/users/compliments/receive",
  ensureAuthenticate,
  listUserReceiveComplimentController.handle
);





export { router };
