import { rest } from "msw";

export const handlers = [
  rest.post("/login", (req, res, ctx) => {
    console.log("req", req.body);
    const { account, password } = req.body;
    const isAuthenticated = account === "admin" && password === "123456";
    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Not authorized",
        })
      );
    }

    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: "admin",
      })
    );
  }),
];
