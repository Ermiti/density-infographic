import logo from './logo.svg';
import './App.css';
import bg from './BG01.png'
import img1 from './density-section.png'
import result from './Result.png'
function App() {
  return (
    <div className="App">
      <img src={bg} id='bg' alt="" />
    <header className='header'>
    <h1 style={
      {
        margin : '1rem auto'
      }
    }>
 Density
    </h1>
    <div>
<p>Definition</p>
<p>Measurements and calculating</p>

    </div>
    </header>

    <section className='description'>
 <h2>   What Is The Density?</h2>
 <p>
 Density is an important feature of any material. 
By definition, the ratio of the mass of a substance to its volume 
Groceries say. 
in other hand, Density is a substance's mass per unit of volume. The symbol most often used for density is ρ although the Latin letter D can also be used.
a example of dansity in your routine life if the the behavior between oil, water and honey: 
 </p>

    </section>
    <img src={img1} id='img1' alt="" />

    <div className='pink-div'>
    </div>
    <h4>to calculate the value of density we should divide the mass by its value. (ρ = m/v):</h4>
    <img src={result} id='img2' alt="" />
    
    <section className='description' style={{marginTop:'-2rem', opacity:'100%', width:'80%', marginLeft:'6rem'}}>
      <h1>Calculating The Density Of Liquid:</h1>
      <p>1) Measure the mass of a balloon with a scale. 2) Fill the balloon with water until it is marked. (m1 has already Achieved)</p>
      <p>3) Measure the mass of the balloon or cylinder filled with water with a scale (m2 has already Achieved) </p>
      <p>4) According to the difference between two massS, Specify the mass of water And with the mass and volume of the water, the density of it is countable. </p>
      <h3>Measuring the known geometric shapes is the same as liquids but difference is the volume is calculated by Formulas of Geometric Shapes </h3>
      <h1>Calculating The Density Of Objects without a geometric shape:</h1>
      
      <p> 1) Measure the volume of one or two geometric objects of unknown geometric shape with the help of a graded cylinder and water. 2) Measure the scale of their mass. 3) by the formula find the result. </p>
    </section>
    </div>
  );
}

export default App;
