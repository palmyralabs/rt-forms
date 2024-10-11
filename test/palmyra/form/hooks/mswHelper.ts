import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'

const data = [
    { id: 1, name: "Name" },
    { id: 2, name: "Date" },
    { id: 3, name: "Location" }
]

const handlers = [
    http.get('/api/palmyra/masterdata', ({ request, params, cookies }) => {
        return HttpResponse.json({ result: data, total: data.length })
    }),
]

const mswServer = setupServer(
    ...handlers
)


export { mswServer };