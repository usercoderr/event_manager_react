import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IEvent} from "../../types/events.ts";
import {BASE_SERVER_URL} from "../../api/server.ts";

export const eventsApi = createApi({
    reducerPath: 'eventsApi',
    baseQuery: fetchBaseQuery({baseUrl: BASE_SERVER_URL}),
    tagTypes: ['Events'],
    endpoints: (build) => ({
        fetchEventsAsync: build.query<IEvent[], number>({
            query: (limit?: number) => ({url: `events`, params: {_limit: limit}}),
            providesTags: ['Events']
        }),
        fetchEventByIdAsync: build.query<IEvent, string>({
            query: (id?: string) => ({url: `events/${id}`}),
            providesTags: ['Events']
        }),
        fetchEventsByQuery: build.query<IEvent[], string>({
            query: (value: string) => ({url: `events?q=${value}`}),
            providesTags: ['Events']
        }),
        createEvent: build.mutation<IEvent, IEvent>({
            query: (event) => ({
                url: `events`,
                method: 'POST',
                body: event
            }),
            invalidatesTags: ['Events']
        }),
        updateEvent: build.mutation<IEvent, IEvent>({
            query: (event) => ({
                url: `events/${event.id}`,
                method: 'PATCH',
                body: event
            }),
            invalidatesTags: ['Events']
        }),
        deleteEvent: build.mutation<void, IEvent>({
            query: (event) => ({
                url: `events/${event.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Events']
        })
    })
})
