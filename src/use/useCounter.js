import { reactive, computed, watch, onMounted, nextTick } from 'vue'
const counterData = reactive({
  count: 0,
  title: 'My Counter'
})
export function useCounter() {
   
  watch(() => counterData.count, (newCount) => {
    if(newCount === 20) {
      alert('you made it to 20!')    
    }
  })
  
  const oddOrEven = computed(() => {
    if (counterData.count %2 === 0) return 'even'
    return 'odd'
  })
  
  const increaseCounter = (amount) => {
    counterData.count += amount
  }
  
  const decreaseCounter = async (amount) => {
    counterData.count -= amount
    await nextTick()
    console.log('do something when counter has updated in teh dom') 
  }

  return {
    counterData,
    oddOrEven,
    increaseCounter,
    decreaseCounter
  }
}