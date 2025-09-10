 #include<iostream>
struct Size{
    int id;
    char arr[10];
    float sal;
};
int main(){
    struct Size s1;
    std::cout<<"Size = "<<sizeof(s1)<<std::endl; //20 not 18(16 bit)
}