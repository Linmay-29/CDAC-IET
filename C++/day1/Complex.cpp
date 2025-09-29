#include<iostream>
using namespace std;
class Complex{
    int real,img;
    public:
    void accept();
    void display()const;
    void setReal(int);
    int getReal() const;
    Complex(){
        cout<<"no argument"<<endl;
    }
    Complex(int real,int img){
        cout<<"Para - argument"<<endl;
        this->real=real;
        this->img=img;
    }
};
void Complex::accept(){
    cout<<"enter real and img"<<endl;
    cin>>real>>img;
}
void Complex::display()const{
    cout<<"Num is "<<real<<" + "<<img<<"i"<<endl;
}
void Complex::setReal(int p){
    real = p;
}
int Complex::getReal() const{
    return real;
}
int main(){
    Complex c1;
    c1.accept();
    c1.display();
    int temp ; 
    cout<<"enter new real "<<endl;
    cin>>temp;
    c1.setReal(temp);
    cout<<"real is "<<c1.getReal()<<endl;
    c1.display();
    const Complex c2;
    c2.display();
}