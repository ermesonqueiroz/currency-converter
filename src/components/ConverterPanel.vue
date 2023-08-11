<script setup>
import { ref } from "vue";
import { REQUESTS } from "../utils/api";

const currencies = {
  from: 'USD',
  to: 'BRL',
}

async function getExchangeRate() {
  const res = await fetch(
    REQUESTS.GET_EXCHANGE_RATE(currencies.from, currencies.to)
  );
  const { data } = await res.json();

  console.log(data);
  exchangeRate.value = Number(data[currencies.to].toFixed(2));
}

const amount = ref(1);
const exchangeRate = ref(1);

getExchangeRate();
</script>

<template>
  <div class="bg-[#262629] rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-[#3a3a3d] max-w-md w-full">
    <h1 class="font-medium my-3 mx-4">Currency Converter</h1>

    <div class="border-t border-[#3a3a3d] p-4 flex flex-col gap-1">
      <div class="flex gap-1 justify-center items-center h-12">
        <button class="h-12 rounded-2xl border border-[#3a3a3d] text-[#eeeeef] font-medium w-12 bg-[#1e1d21]">
          $
        </button>
        <input v-model="amount" type="number" class="bg-[#1e1d21] border border-[#3a3a3d] font-medium rounded-2xl outline-none text-[#eeeeef] h-full px-3 flex-1" />
      </div>
      <div class="flex gap-1 justify-center items-center h-12">
        <button class="h-full rounded-2xl border border-[#3a3a3d] text-[#eeeeef] font-medium w-12 bg-[#1e1d21]">
          R$
        </button>
        <input :value="Number((amount * exchangeRate).toFixed(2))" readonly type="number" class="bg-[#1e1d21] border border-[#3a3a3d] font-medium rounded-2xl outline-none text-[#eeeeef] h-full px-3 flex-1" />
      </div>
    </div>
  </div>
</template>
