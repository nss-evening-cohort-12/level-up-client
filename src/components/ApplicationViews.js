import React from "react"
import { Route } from "react-router-dom"
import { GameProvider } from "./games/GameProvider"
import { GameList } from "./games/GameList"
import { EventList } from "./events/EventList"
import { EventProvider } from "./events/EventProvider"
import { GameForm } from "./games/GameForm"
import { EventForm } from "./events/EventForm"
import { ProfileProvider } from "./auth/ProfileProvider"
import { Profile } from "./auth/Profile"


export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow"
        }}>
            <GameProvider>
                <Route exact path="/" render={ props => <GameList {...props}/>} />
                    
                <Route exact path="/games/new" render={props => <GameForm {...props} />} />
                <Route exact path="/games/:gameId(\d+)/edit" render={props => <GameForm {...props} />} />

                <EventProvider>
                    <Route exact path="/events">
                        <EventList />
                    </Route>

                    <Route exact path="/events/new" render={props => <EventForm {...props} />} />
                </EventProvider>
            </GameProvider>

            <ProfileProvider>
                <Route exact path="/profile">
                    <Profile />
                </Route>
            </ProfileProvider>
        </main>
    </>
}
