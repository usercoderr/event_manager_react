import React, {FC, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {eventsApi} from "../../redux/services/eventsApi.ts";
import {IEvent, IHashTag} from "../../types/events.ts";
import {generateUniqueId} from "../../features/uniqueId.ts";
import Input from "../../ui/Input.tsx";

const CreateEvent: FC = () => {
    const navigate = useNavigate()
    const [hashtagValue, setHashTagValue] = useState<string>('')
    const [createEvent, {isLoading, error}] = eventsApi.useCreateEventMutation()
    const [event, setEvent] = useState<Omit<IEvent, 'id'>>({
        title: "",
        description: "",
        date: '',
        time: "",
        location: "",
        author: "",
        contact: {
            phoneNumber: "",
            instagram: "",
            telegram: ""
        },
        hashTags: []
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target

        if (name.startsWith('contact.')) {
            const contactField = name.split('.')[1]
            setEvent((prev) => ({
                ...prev,
                contact: {
                    ...prev.contact,
                    [contactField]: value
                }
            }))
        } else {
            setEvent((prev) => ({
                ...prev,
                [name]: value
            }))
        }

    }
    const handleHashtag: (value: string) => void = (value) => {
        setHashTagValue(value)
        console.log(hashtagValue)
        if (value.endsWith(';')) {
            const newTags = value.split(';').filter(tag => tag.trim() !== '');
            const newHashtags: IHashTag[] = newTags.map((tag) => ({
                id: generateUniqueId(),
                tag: tag.trim()
            }));
            setEvent((prev) => ({
                ...prev,
                hashTags: [...newHashtags]
            }))
        }

    }


    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();
        const newEvent: IEvent = {
            id: generateUniqueId(),
            title: event.title,
            description: event.description,
            date: new Date(event.date),
            time: event.time,
            location: event.location,
            author: event.author,
            contact: {
                phoneNumber: event.contact.phoneNumber,
                instagram: event.contact.instagram,
                telegram: event.contact.telegram
            },
            hashTags: event.hashTags
        };
        await createEvent(newEvent)
        console.log(newEvent)
        navigate('/dashboard/events')
        setEvent({
            title: "",
            description: "",
            date: '',
            time: "",
            location: "",
            author: "",
            contact: {
                phoneNumber: "",
                instagram: "",
                telegram: ""
            },
            hashTags: []
        })


    };
    if (error) {
        return 'Error'
    }
    return (
        <div>
            <h3 className="text-2xl font-bold mb-4">Создать мероприятие</h3>
            {isLoading
                ? <h2>Loading...</h2>
                : (
                    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                        <div className="mb-4">
                            <label htmlFor="eventName" className="block text-sm font-medium text-gray-700">
                                Название мероприятия
                            </label>
                            <Input
                                type={'text'} name={'title'}
                                value={event.title}
                                required
                                setValue={(value) => handleChange({
                                    target: {
                                        name: 'title',
                                        value
                                    }
                                } as React.ChangeEvent<HTMLInputElement>)}
                                placeholder={'Введите название мероприятия'}/>


                            <label htmlFor="eventName" className="block text-sm font-medium text-gray-700">
                                Описание мероприятия
                            </label>
                            <Input
                                type={'text'}
                                name={'description'}
                                value={event.description}
                                setValue={(value) => handleChange({
                                    target: {
                                        name: 'description',
                                        value
                                    }
                                } as React.ChangeEvent<HTMLInputElement>)}
                                placeholder={'Введите описание мероприятия'}/>

                            <label htmlFor="eventName" className="block text-sm font-medium text-gray-700">
                                Хештеги мероприятия
                            </label>
                            <Input
                                type={'text'}
                                value={hashtagValue}
                                setValue={handleHashtag}
                                placeholder={'первыйХештег; второйХештег;'}/>

                            <div className={'flex justify-between'}>
                                <div className={'w-1/4'}>
                                    <label htmlFor="eventName" className="block text-sm font-medium text-gray-700">Время
                                        начала
                                        мероприятия</label>
                                    <Input
                                        required
                                        type={'time'}
                                        value={event.time}
                                        setValue={(value) => handleChange({
                                            target: {
                                                name: 'time',
                                                value
                                            }
                                        } as React.ChangeEvent<HTMLInputElement>)}
                                    />
                                </div>
                                <div className={'w-1/4'}>
                                    <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700">Дата
                                        мероприятия</label>
                                    <Input
                                        required
                                        type={'date'}
                                        value={event.date}
                                        setValue={(value) => handleChange({
                                            target: {
                                                name: 'date',
                                                value
                                            }
                                        } as React.ChangeEvent<HTMLInputElement>)}
                                    />
                                </div>
                                <div className={'w-1/4'}>
                                    <label htmlFor="eventName" className="block text-sm font-medium text-gray-700">Локация
                                        мероприятия</label>
                                    <Input
                                        required
                                        type={'text'}
                                        value={event.location}
                                        setValue={(value) => handleChange({
                                            target: {
                                                name: 'location',
                                                value
                                            }
                                        } as React.ChangeEvent<HTMLInputElement>)}
                                        placeholder={'Локация мероприятия'}/>
                                </div>
                            </div>

                            <h2 className={'my-2'}>Контактные данные</h2>
                            <div className={'flex w-full justify-between'}>
                                <div className={'flex flex-col w-1/3'}>
                                    <label htmlFor="eventName" className="block text-sm font-medium text-gray-700">Организатор
                                        мероприятия</label>

                                    <Input
                                        required
                                        type={'text'}
                                        value={event.author}
                                        setValue={(value) => handleChange({
                                            target: {
                                                name: 'author',
                                                value
                                            }
                                        } as React.ChangeEvent<HTMLInputElement>)}
                                        placeholder={'Организатор мероприятия'}/>
                                    <label htmlFor="eventName" className="block text-sm font-medium text-gray-700">Контакты
                                        мероприятия</label>

                                    <Input
                                        required
                                        type={'text'}
                                        name={'contact.phoneNumber'}
                                        value={event.contact.phoneNumber}
                                        setValue={(value) => handleChange({
                                            target: {
                                                name: 'contact.phoneNumber',
                                                value
                                            }
                                        } as React.ChangeEvent<HTMLInputElement>)}
                                        placeholder={'Номер телефона'}/>
                                </div>
                                <div className={'flex flex-col w-1/3'}>

                                    <label htmlFor="eventName" className="block text-sm font-medium text-gray-700">Instagram
                                        мероприятия</label>

                                    <Input
                                        type={'text'}
                                        name={'contact.instagram'}
                                        value={event.contact.instagram}
                                        setValue={(value) => handleChange({
                                            target: {
                                                name: 'contact.instagram',
                                                value
                                            }
                                        } as React.ChangeEvent<HTMLInputElement>)}
                                        placeholder={'https://instagram.com/'}/>
                                    <label htmlFor="eventName" className="block text-sm font-medium text-gray-700">Telegram
                                        мероприятия</label>
                                    <Input
                                        type={'text'}
                                        name={'contact.telegram'}
                                        value={event.contact.telegram}
                                        setValue={(value) => handleChange({
                                            target: {
                                                name: 'contact.telegram',
                                                value
                                            }
                                        } as React.ChangeEvent<HTMLInputElement>)}
                                        placeholder={'https://t.me/'}/>
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                        >
                            Создать
                        </button>
                    </form>)}

        </div>
    );
};

export default CreateEvent;
