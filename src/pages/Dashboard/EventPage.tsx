import {Link, useNavigate, useParams} from "react-router-dom";
import {eventsApi} from "../../redux/services/eventsApi.ts";
import {IEvent} from "../../types/events.ts";

const EventPage = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [deleteEvent] =  eventsApi.useDeleteEventMutation()
    if (!id) {
        return
    }
    const handleDelete = async (event:IEvent) =>{
        await deleteEvent(event)
        navigate('/dashboard/events')

    }
    const {data: event} = eventsApi.useFetchEventByIdAsyncQuery(id)
    if(event){

    return (
        <div className="container mx-auto p-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-2">{event.title}</h1>
                <p className="text-gray-700 mb-4">{event.description}</p>
                <div className="text-gray-600 mb-4">
                    <p><strong>Дата:</strong> {new Date(event.date).toLocaleDateString()}</p>
                    <p><strong>Время:</strong> {event.time}</p>
                    <p><strong>Локация:</strong> {event.location}</p>
                    <p><strong>Автор:</strong> {event.author}</p>
                </div>
                <div className="text-gray-600 mb-4">
                    <p><strong>Телефон:</strong> {event.contact.phoneNumber}</p>
                    <p><strong>Instagram:</strong> {event.contact.instagram}</p>
                    <p><strong>Telegram:</strong> {event.contact.telegram}</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2">Хештеги</h3>
                    <ul className="list-disc list-inside mb-4">
                        {event.hashTags.map(tag => (
                            <li key={tag.id} className="text-blue-600">{tag.tag}</li>
                        ))}
                    </ul>
                </div>
                <div className="mt-4 flex space-x-4">
                    <Link to={`/dashboard/events/${event.id}/edit`}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Изменить
                    </Link>
                    <button onClick={() => handleDelete(event)}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                        Удалить
                    </button>
                </div>
            </div>
        </div>)
}
}

export default EventPage
