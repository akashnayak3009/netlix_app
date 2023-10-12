import users from "../models/userModel.js";

export const addToLikedMovies = async (req, res) => {
    try {
        const { email, data } = req.body;
        const user = await users.findOneAndUpdate(
            { email },
            {
                $addToSet: { likedMovies: data } // $addToSet adds 'data' only if it doesn't already exist in the 'likedMovies' array
            },
            {
                new: true,
                upsert: true // Create a new document if it doesn't exist
            }
        );

        return res.status(200).json({ message: "Movie successfully added to the liked list." });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Error in add to liked movies" });
    }
};


export const removeFromLikedMovies = async (req, res) => {
    try {
        const { email, movieId } = req.body;
        const user = await users.findOne({ email });
        if (user) {
            const movies = user.likedMovies;
            const movieIndex = movies.findIndex(({ id }) => id === movieId);
            if (movieIndex === -1) {
                return res.status(400).json({ message: "Movie not found" });
            }
            movies.splice(movieIndex, 1);
            const updatedUser = await users.findByIdAndUpdate(
                user._id,
                {
                    likedMovies: movies,
                },
                { new: true }
            );
            return res.json({ message: "Movie successfully removed.", movies: updatedUser.likedMovies });
        } else {
            return res.status(404).json({ message: "User with given email not found." });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error removing movie from the liked list" });
    }
};


export const getLikedMovies = async (req, res) => {
    try {
        const { email } = req.params;
        const user = await users.findOne({ email });
        if (user) {
            return res.status(200).json({ msg: "Success", movies: user.likedMovies });
        } else {
            return res.status(404).json({ msg: "User with given email not found." });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Error fetching movies." });
    }
};