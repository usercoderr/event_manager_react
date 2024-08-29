import {FC} from "react";
import {IEvent} from "../types/events.ts";
import dayjs from 'dayjs'
import {Link} from "react-router-dom";


type Props ={
    event: IEvent
}

const EventItem:FC<Props> = ({event}) =>{
    const formattedDate = dayjs(event.date).format('DD/MM/YYYY');
    return(
        <Link to={`/dashboard/events/${event.id}`} className="max-w-sm rounded overflow-hidden shadow-lg mt-1">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{event.title}</div>
                    <p className="text-gray-700 text-base">
                        {event.description}
                    </p>
                </div>
            <div className={'flex'}>
            <div className={'px-6 py-4'}>
                Date: {formattedDate}
            </div>
            <div className={'px-6 py-4'}>
                Time: {event.time}
            </div>
            </div>
            <div className={'px-6 py-4'}>
                Location:{event.location}
            </div>
                <div className="px-6 pt-4 pb-2">
                    {event.hashTags.map((hashtag) => (  <span key={hashtag.id}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{hashtag.tag}</span>))}
                </div>
        </Link>
    )
}
export default EventItem
