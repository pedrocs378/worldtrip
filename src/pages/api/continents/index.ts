import { NextApiRequest, NextApiResponse } from 'next'

import continentsData from '../../../../continents.json'

export default async (req: NextApiRequest, res: NextApiResponse) => {

	if (req.method === 'GET') {

		return new Promise(resolve => {
			return setTimeout(() => resolve(res.json(continentsData)), 2000)
		})
	}
}