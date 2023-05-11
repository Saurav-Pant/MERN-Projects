//Router
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});
