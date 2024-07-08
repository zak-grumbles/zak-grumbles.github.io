<template>
    <div class="w-full h-full bg-street bg-cover bg-center">
        <NotificationTray>
            <DesktopNotif :delay=3500 :duration=7500>Hi!</DesktopNotif>
            <DesktopNotif :delay=7500 :duration=7500>
                I'm not really sure how you made it to my desktop...
            </DesktopNotif>
        </NotificationTray>
        <div class="ml-sidebar py-4 px-4 h-full">
            <AppWindow>
                <template v-slot:appbar>
                    <span class="text-white pl-2">Terrain Gen Project Info</span>
                </template>
                <div class="py-2 px-2">
                    <div class="text-2xl text-subtle-gray">Terrain-Gen</div>
                    <img src="public/terrain-gen.png" class="pb-2"/>
                    <p>
                        Terrain-Gen started as the final project for my graphics course,
                        which was longer ago than I'd like to admit. In a nutshell, the
                        application uses noise to generate terrain. It was originally written
                        in immediate mode OpenGL and utilized an un-threaded implementation of
                        the marching cubes algorithm. It was <span class="italic">slow</span>.
                    </p>
                    <br/>
                    <p>
                        It has recently been re-written in more modern C++ and utilizes the QT Framework 
                        for its user interface. Noise generation is now customizable via a node graph. 
                        It's still a work in progress and there are quite a few features I want to add, 
                        but I'm quite proud of how far it's come.
                    </p>
                </div>
            </AppWindow>
        </div>
    </div>
</template>
