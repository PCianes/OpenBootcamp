package com.company;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;

public class Main {

    public static void main(String[] args) {
        String word = "hello world";

	    String reverseWord = reverse(word);
        System.out.println("Reversed word: " + reverseWord);

        String reverseWordBuilder = reverse( new StringBuilder(word) );
        System.out.println("Reversed word with Builder: " + reverseWordBuilder);

        // launching all methods as different exercises
        method1();
        method2();
        method3();
        method4();
        method5();
        method6();

        try {
            int number = 555;
            int result = method7(number);
        } catch (ArithmeticException exception) {
            System.out.println("This can't be done (divide by zero)");
        } finally {
            System.out.println("Code demo");
        }

        Path path = Paths.get("src/resources");
        String resourcesPath = path.toAbsolutePath().toString();
        method8(resourcesPath + "/input-data.txt", resourcesPath + "/output-data.txt");

        method9(resourcesPath + "/final-data.txt");
    }

    private static String reverse(String text){
        String reverseText = "";

        for(int i = text.length() - 1; i >= 0; i--){
            String letter = String.valueOf( text.charAt(i) );
            reverseText = reverseText.concat( letter );
        }

        return reverseText;
    }

    private static String reverse( StringBuilder text){
        return text.reverse().toString();
    }

    private static void method1() {
        String[] data = { "apple", "tomato", "car", "house", "cloudy"};

        for (String word : data ){
            System.out.println(word);
        }
    }

    private static void method2(){
        int[][] data = {
                {1, 2, 3, 4, 5},
                {11, 22, 33, 44, 55}
        };

        for (int row =0; row < data.length; row++){
            for ( int column=0; column < data[row].length; column++){
                System.out.println("Position ["+ row + "]["+ column +"]: " + data[row][column]);
            }
        }

        /*
        for ( int[] x: data){
            for ( int y : x) {
                System.out.println(y);
            }
        }
        */
    }

    private static void method3() {
        Vector<Integer> dataVector = new Vector<>();

        dataVector.add(111);
        dataVector.add(222);
        dataVector.add(333);
        dataVector.add(444);
        dataVector.add(555);

        System.out.println(dataVector);

        dataVector.remove(1);

        System.out.println(dataVector);

        dataVector.remove(2);

        System.out.println(dataVector);
    }

    private static void method4() {
        Vector<Integer> dataVector = new Vector<>();

        System.out.println("Initial Capacity: " + dataVector.capacity());

        for(int i=1; i <=1000; i++){
            dataVector.add(i);
        }

        System.out.println(dataVector);
        System.out.println("Final Capacity: " + dataVector.capacity());
    }

    private static void method5(){
        ArrayList<String> arrayData = new ArrayList<>();

        arrayData.add("one");
        arrayData.add("two");
        arrayData.add("three");
        arrayData.add("four");

        for( String word: arrayData){
            System.out.println(word);
        }

        LinkedList<String> linkedData = new LinkedList<>(arrayData);

        for( String word: linkedData) {
            System.out.println(word);
        }

    }

    private static void method6(){
        ArrayList<Integer> arrayData = new ArrayList<>();

        for( int i = 1; i<=10; i++){
            arrayData.add(i);
        }

        for( int i = arrayData.size()-1; i>=0 ;i--){
            int number = arrayData.get(i);
            if( number % 2 == 0){
                arrayData.remove(i);
            }
        }

        for(int number: arrayData){
            System.out.println(number);
        }
    }

    private static int method7(int number) throws ArithmeticException {
        int zero = 0;
        return number / zero;
    }

    private static void method8(String fileIn, String fileOut){
        try {
            InputStream inputFile = new FileInputStream(fileIn);
            PrintStream outputFile = new PrintStream(fileOut);

            byte[] bytes = inputFile.readAllBytes();
            String content = new String(bytes, StandardCharsets.UTF_8);

            outputFile.println(content);

            inputFile.close();
            outputFile.close();

        } catch (FileNotFoundException exception){
            System.out.println(exception.toString());
        } catch (IOException exception) {
            exception.printStackTrace();
        }
    }

    private static void method9(String fileOut){
        HashMap<Integer, String> content = new HashMap<>();

        try {
            PrintStream outputFile = new PrintStream(fileOut);

            while (content.size() < 5){
                System.out.println("Type a character");

                InputStreamReader input = new InputStreamReader(System.in);
                int code = input.read();
                char character = (char) code;

                outputFile.println("code: " + code + " => character: " + character);

                content.put(code, String.valueOf(character));
            }

            outputFile.close();

        } catch (IOException e) {
            e.printStackTrace();
        }

        LinkedList<Integer> keys = new LinkedList<>(content.keySet());
        LinkedList<String> values = new LinkedList<>(content.values());

        System.out.println(keys);
        System.out.println(values);
    }
}
