import axios from "axios";
import User from "../../models/User.js";
import { signUser } from "../../utils/jwt.helper.js";
import CustomError from "../../utils/CustomError.js";

export const googleLogin = async (_, { code }, { res }) => {
	try {
		const tokenRes = await axios.post('https://oauth2.googleapis.com/token', null, {
			params: {
				code,
				client_id: process.env.GOOGLE_CLIENT_ID,
				client_secret: process.env.GOOGLE_CLIENT_SECRET,
				redirect_uri: process.env.GOOGLE_REDIRECT_URI,
				grant_type: 'authorization_code',
			},
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			}
		});

		const { access_token } = tokenRes.data;

		const userInfoRes = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo', {
			headers: {
				Authorization: `Bearer ${access_token}`,
			}
		});

		const { email, name, picture } = userInfoRes.data;

		let user = await User.findOne({ email });
		if (!user) {
			user = await User.create({
				email,
				password: null,
				name,
				profilePic: picture,
			});
		}

		const { accessToken, refreshToken } = signUser(user.email);

		return {
			success: true,
			message: "Login successful",
			user,
			accessToken,
			refreshToken,
		};
	} catch (err) {
		console.error(err);
		throw new CustomError("Google authentication failed");
	}
};

export const getAllUsers = async () => {
	try {
		const users = await User.find();
		return users;
	} catch (err) {
		console.error(err);
		throw new CustomError("Failed to fetch users");
	}
};

export const getUserById = async (_, { id }) => {
	try {
		const user = await User.findById(id);
		return user;
	} catch (err) {
		console.error(err);
		throw new CustomError("Failed to fetch user");
	}
};