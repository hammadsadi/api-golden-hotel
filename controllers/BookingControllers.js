/**
 * @Desc Create JWT
 * @Method POST
 * @Access PUBLIC
 */

export const createJwt = async (req, res) => {
  try {
    res.send("ok");
  } catch (error) {
    return res.status(500).json({
      message: "error from saveUser createJwt",
      error: error.message,
    });
  }
};
