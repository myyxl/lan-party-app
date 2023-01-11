interface InfoResponse {
    date: string,
    city: string
}

export default defineEventHandler((event): InfoResponse => {
   return {
       date: '31.12.2023',
       city: 'Hohe-Hehlen'
   }
});