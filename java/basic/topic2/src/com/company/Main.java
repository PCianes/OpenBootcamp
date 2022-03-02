package com.company;

public class Main {

    static final float tax = 1.21f;

    public static void main(String[] args) {
        int price = 200;
	    float priceWithTax = getPriceWithTax(price);

        System.out.println("Price: " + priceWithTax);
    }

    static float getPriceWithTax(int basePrice){
        return basePrice * tax;
    }
}
