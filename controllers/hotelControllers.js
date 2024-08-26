import Hotel from "../models/hotel.js";
/**
 * @Desc Create Hotel
 * @Method POST
 * @Access Private
 */

export const createHotel = async (req, res) => {
  try {
    const { name, email, owner, phone, location, media } = req.body;

    // Check Hotel
    const hotel = await Hotel.findOne({ name: name });
    if (hotel) {
      return res.status(400).json({
        message: "Hotel Already Exist",
      });
    }

    // Save Hotel
    const newHotel = new Hotel({
      name,
      email,
      owner,
      phone,
      location,
      media,
    });

    if (newHotel) {
      newHotel.save();
      return res.status(200).json({ hotel: newHotel });
    }

    return res.status(400).json({ error: "Invalid Data Format" });
  } catch (error) {
    return res.status(500).json({
      message: "error from saveUser",
      error: error.message,
    });
  }
};

/**
 * @Desc Get All Hotel
 * @Method POST
 * @Access Private
 */

export const getAllHotel = async (req, res) => {
  try {
    // get Hotels
    const hotels = await Hotel.find().sort({ createdAt: -1 });

    return res.status(200).json(hotels);
  } catch (error) {
    return res.status(500).json({
      message: "error from getAllHotel",
      error: error.message,
    });
  }
};

/**
 * @Desc Update Hotel Info
 * @Method POST
 * @Access Private
 */

/**
 * @Desc Update Hotel Info
 * @Method PUT
 * @Access Private
 */

export const updateHotelInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, owner, phone, location, media } = req.body;

    // Check Hotel
    const hotel = await Hotel.findById(id);
    if (!hotel) {
      return res.status(404).json({
        message: "Hotel Not Found",
      });
    }

    // Save Hotel

    hotel.name = name || hotel.name;
    hotel.email = email || hotel.email;
    hotel.owner = owner || hotel.owner;
    hotel.phone = phone || hotel.phone;
    hotel.location = location || hotel.location;
    hotel.media = media || hotel.media;

    await hotel.save();

    return res.status(200).json({ hotel, message: "Hotel Updated Successful" });
  } catch (error) {
    return res.status(500).json({
      message: "error from updateHotelInfo",
      error: error.message,
    });
  }
};

/**
 * @Desc Delete Hotel
 * @Method DELETE
 * @Access Private
 */

export const deleteHotel = async (req, res) => {
  try {
    const { id } = req.params;
    // get Hotels
    const hotel = await Hotel.findByIdAndDelete(id);

    if (hotel) {
      return res
        .status(200)
        .json({ hotel, message: "Hotel Deleted Successful" });
    }

    return res.status(400).json({
      error: "Bad Request Hotel Not Found",
    });
  } catch (error) {
    return res.status(500).json({
      message: "error from deleteHotel",
      error: error.message,
    });
  }
};
