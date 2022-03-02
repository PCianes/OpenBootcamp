package com.company;

public class Main {

    public static void main(String[] args) {

        String[] names = {"Pepe", "Pablo", "Miriam", "Ana"};

        printNames(names);
    }

    public static void printNames( String[] names){
        StringBuilder output = new StringBuilder();

        for (String name: names){
            output.append(name).append(" ");
        }

        output = new StringBuilder(output.toString().trim());

        System.out.println(output);
    }
}
