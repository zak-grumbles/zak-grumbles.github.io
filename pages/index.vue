<template>
    <div class="w-full h-full bg-street bg-cover bg-center">
        <NotificationTray>
            <DesktopNotif :delay=3500 :duration=7500>Hi!</DesktopNotif>
            <DesktopNotif :delay=7500 :duration=7500>
                I'm not really sure how you made it to my desktop...
            </DesktopNotif>
        </NotificationTray>
        <div class="ml-sidebar pt-2 px-2">
            <AppWindow/>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>