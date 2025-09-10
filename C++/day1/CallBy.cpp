#include<iostream>
void swap(int &x,int &y){
    x=x+y;
    y=x-y;
    x=x-y;
    std::cout<<"X= "<<x<<" Y= "<<y<<std::endl;
}
int main(){
    std::cout<<"Enter values"<<std::endl;
    int x,y;
    std::cin>>x>>y;
    swap(x,y);
    std::cout<<"After Swapping"<<std::endl;
    std::cout<<"X= "<<x<<" Y= "<<y<<std::endl;
}