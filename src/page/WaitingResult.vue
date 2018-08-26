<template lang="pug">
  div
    h1 submitted!!
    router-link(
        :to="{name: 'Result', params: {lounge_id: 12345, member_id: 12345}}"
    ) Show Result
</template>
