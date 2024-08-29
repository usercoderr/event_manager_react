import React, {useState} from 'react';
import useDebounce from "../../hooks/useDebounce.ts";
import {eventsApi} from "../../redux/services/eventsApi.ts";
import Input from "../../ui/Input.tsx";
import EventItem from "../../ui/EventItem.tsx";
import {IEvent} from "../../types/events.ts";

const EventsPage: React.FC = () => {
    const [searchInput, setSearchInput] = useState<string>('')
    const searchValue = useDebounce(searchInput, 500)
    const {data: searchData, isLoading, error} = eventsApi.useFetchEventsByQueryQuery(searchValue)
    if (error) {
        return 'Sorry'
    }
    if (isLoading) {
        return 'Loading...'
    }
    return (
        <div>
            <div className={'flex items-center justify-between'}>
                <h3 className="text-2xl font-bold mb-4">Все мероприятия</h3>
                <div className={'flex  items-center justify-between'}>
                    <Input type={'text'} value={searchInput} setValue={setSearchInput} placeholder={'Search...'}/>
                    <span className={'ml-4 w-1/4 p-2 mb-4'}>
                        Sort
                     </span>
                </div>
            </div>

            <ul className={'grid-container hide-scrollbar'}>
                {searchData && searchData.map((event: IEvent) => <EventItem event={event} key={event.id}/>)}


            </ul>
        </div>
    );
};

export default EventsPage;
