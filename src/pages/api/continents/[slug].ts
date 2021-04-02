import { NextApiRequest, NextApiResponse } from 'next'

import continentsData from '../../../../continents.json'

export default async (req: NextApiRequest, res: NextApiResponse) => {

	if (req.method === 'GET') {
		const { slug } = req.query

		return new Promise(resolve => {
			const continent = continentsData.find(data => data.slug === slug)

			return setTimeout(() => resolve(res.json(continent)), 2000)
		})
	}
}