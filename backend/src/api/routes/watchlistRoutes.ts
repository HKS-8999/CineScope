import { Router } from "express";
import watchlistController from "../controllers/WatchlistController";

const watchlistRoute = (): Router => {
  const router = Router();

  router.route("/").post(watchlistController.addToWatchlist);
  router.route("/:userId/").get(watchlistController.readWatchlist);

//   router
//     .route("/:movieId")
//     .get(movieController.getmovie)
//     .put(movieController.updatemovie)
//     .delete(movieController.deletemovie);

  return router;
};

export default watchlistRoute;