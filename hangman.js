const celebrities = ['Beyonce', 'Taylor Swift', 'Ellen DeGeneres', 'Dwayne Johnson', 'George Clooney', 'Sean Comb', 'Alec Baldwin', 'Bradley Cooper', 'Serena Williams', 'Laila Ali', 'Rosario Dawson', 'Cardi B', 'Leonardo DiCaprio', 'Liam Hemsworth', 'Will Smith', 'Shawn Carter', 'Sofia Vergara', 'Demi Lovato', 'Jennifer Lawrence','Miley Cyrus','Idris Elba', 'Kanye West','Kylie Jenner','Ed Sheeran','Rihanna','Drake','Nipsey Hussle']

const celebrity = () => {
    randCeleb = Math.floor(Math.random() * celebrities.length);
    selectCeleb = celebrities[randCeleb];
}