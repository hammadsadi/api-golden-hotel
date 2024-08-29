import Room from "../models/room.js";
/**
 * @Desc Create Room
 * @Method POST
 * @Access Private
 */

export const createRoom = async (req, res) => {
  try {
    const {
      hotel,
      roomName,
      roomNumber,
      type,
      amenities,
      bedrooms,
      rentPerDay,
      photo,
    } = req.body;
    // Check Room
    const room = await Room.findOne({ roomName });
    if (room) {
      return res.status(200).json({
        message: "Room Already Exist",
        success: false,
      });
    }
    const newRoom = await Room.create({
      hotel,
      roomNumber,
      type,
      rentPerDay,
      bedrooms,
      roomName,
      amenities,
      photo,
    });

    res.status(200).json({
      message: "Room Created Successful",
      success: true,
      room: newRoom,
    });
  } catch (error) {
    return res.status(500).json({
      message: "error from createRoom ",
      error: error.message,
    });
  }
};

/**
 * @Desc Get All Room
 * @Method GET
 * @Access Private
 */

export const getAllRoom = async (req, res) => {
  try {
    // Check Room
    const rooms = await Room.find().populate("hotel").sort({ createdAt: -1 });

    res.status(200).json(rooms);
  } catch (error) {
    return res.status(500).json({
      message: "error from getAllRoom ",
      error: error.message,
    });
  }
};

/**
 * @Desc Update Room
 * @Method Put
 * @Access Private
 */

export const updateRoomInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      hotel,
      roomName,
      roomNumber,
      type,
      amenities,
      bedrooms,
      rentPerDay,
      photo,
    } = req.body;

    // Check Hotel
    const room = await Room.findById(id);
    if (!room) {
      return res.status(404).json({
        message: "Room Not Found",
        success: false,
      });
    }

    // Save Hotel

    room.hotel = hotel || room.hotel;
    room.roomName = roomName || room.roomName;
    room.roomNumber = roomNumber || room.roomNumber;
    room.type = type || room.type;
    room.amenities = amenities || room.amenities;
    room.bedrooms = bedrooms || room.bedrooms;
    room.rentPerDay = rentPerDay || room.rentPerDay;
    room.photo = photo || room.photo;
    await room.save();

    return res
      .status(200)
      .json({ room, message: "Room Updated Successful", success: true });
  } catch (error) {
    return res.status(500).json({
      message: "error from updateRoomInfo",
      error: error.message,
    });
  }
};

/**
 * @Desc Delete Room
 * @Method DELETE
 * @Access Private
 */

export const deleteRoom = async (req, res) => {
  try {
    const { id } = req.params;
    // get Room
    const room = await Room.findByIdAndDelete(id);

    if (room) {
      return res
        .status(200)
        .json({ room, message: "Hotel Deleted Successful", success: true });
    }

    return res.status(400).json({
      error: "Bad Request Hotel Not Found",
      success: false,
    });
  } catch (error) {
    return res.status(500).json({
      message: "error from deleteRoom",
      error: error.message,
    });
  }
};
