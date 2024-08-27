/**
 * @Desc Create Room
 * @Method POST
 * @Access Private
 */

export const createRoom = async (req, res) => {
  try {
    const email = req.params.email;
    if (email !== req?.user?.email) {
      return res.status(401).json({
        message: "UnAuthorized Access",
      });
    }
    res.send(req.user);
  } catch (error) {
    return res.status(500).json({
      message: "error from saveUser createJwt",
      error: error.message,
    });
  }
};
